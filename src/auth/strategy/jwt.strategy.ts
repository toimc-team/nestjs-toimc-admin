import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService, private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: { sub: number; email: string; roles: string[] }) {
    // 获取jwt payload信息，从而给req绑定user数据
    const user = await this.prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
      include: {
        UserOnRole: {
          select: {
            role: {
              select: {
                key: true,
              },
            },
          },
        },
      },
    });

    const userRoles = user.UserOnRole.map((item) => {
      return item.role.key;
    });
    delete user.hash;
    delete user.UserOnRole;

    return {
      ...user,
      roles: userRoles,
    };
  }
}
