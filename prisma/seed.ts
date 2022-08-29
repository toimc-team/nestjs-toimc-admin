// https://www.prisma.io/docs/guides/database/seed-database
import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';
// initialize Prisma Client
const prisma = new PrismaClient();

// npx prisma migrate dev --name "init"

// 启动脚本执行main函数操作数据库添加数据
// npx prisma db seed

async function main() {
  const role = await prisma.role.create({
    data: {
      name: 'admin',
      key: 'admin',
    },
  });

  const user = await prisma.user.create({
    data: {
      name: 'admin',
      email: 'test@admin.com',
      hash: await argon2.hash('admin'),
    },
  });

  const userRole = await prisma.userOnRole.create({
    data: {
      roleId: role.id,
      userId: user.id,
    },
  });

  console.log('seed success');
  // create two dummy articles
  // const post1 = await prisma.article.upsert({
  //   where: { title: 'Prisma Adds Support for MongoDB' },
  //   update: {},
  //   create: {
  //     title: 'Prisma Adds Support for MongoDB',
  //     body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
  //     description:
  //       "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
  //     published: false,
  //   },
  // });
  // const post2 = await prisma.article.upsert({
  //   where: { title: "What's new in Prisma? (Q1/22)" },
  //   update: {},
  //   create: {
  //     title: "What's new in Prisma? (Q1/22)",
  //     body: 'Our engineers have been working hard, issuing new releases with many improvements...',
  //     description:
  //       'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
  //     published: true,
  //   },
  // });
  // const post1 = await prisma.focus.upsert({
  //   where: { title: '轮播图' },
  //   update: {},
  //   create: {
  //     title: '轮播图',
  //     link: '123123 ',
  //     content: '131313',
  //     status: 1,
  //     type: 2,
  //     focus_img: '12313',
  //   },
  // });
  // const post2 = await prisma.focus.upsert({
  //   where: { title: '轮播图1' },
  //   update: {},
  //   create: {
  //     title: '轮播图1',
  //     link: '123123 ',
  //     content: '131313',
  //     status: 0,
  //     type: 1,
  //     focus_img: '12313',
  //   },
  // });
  // console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
