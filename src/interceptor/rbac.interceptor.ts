import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { intersection, isEmpty } from 'lodash';

@Injectable()
export class RbacInterceptor implements NestInterceptor {
  // 超级管理员可以操作所有的数据 key = super_admin
  // 其它角色根据自己的权限操作
  // TODO: 根据角色ID获取角色信息，获取角色的权限，判断是否有权限
  constructor(private readonly roles: string[]) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.getArgByIndex(1).req;
    const roles = req.user.roles;

    let hasPermission = false;

    if (roles.includes('super_admin')) {
      hasPermission = true;
    } else {
      hasPermission = !isEmpty(intersection(roles, this.roles));
    }

    if (!hasPermission) {
      throw new ForbiddenException('没有权限');
    }

    return next.handle();
  }
}
