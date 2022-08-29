import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './module/admin/orders/orders.module';
import { ArticlesModule } from './module/admin/articles/articles.module';
import { FocusModule } from './module/admin/focus/focus.module';
import { RolesModule } from '@/module/admin/roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    OrdersModule,
    ArticlesModule,
    FocusModule,
    RolesModule,
  ],
})
export class AppModule {}
