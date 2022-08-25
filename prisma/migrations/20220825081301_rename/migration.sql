/*
  Warnings:

  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Focus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "role";

-- DropTable
DROP TABLE "Article";

-- DropTable
DROP TABLE "Focus";

-- DropTable
DROP TABLE "Orders";

-- DropTable
DROP TABLE "Role";

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_on_role" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "user_on_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articles" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "body" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "member_id" INTEGER NOT NULL,
    "coupon_id" INTEGER NOT NULL,
    "order_sn" TEXT NOT NULL,
    "member_username" TEXT NOT NULL,
    "total_amount" TEXT NOT NULL,
    "pay_amount" TEXT NOT NULL,
    "integration_amount" TEXT NOT NULL,
    "coupon_amount" TEXT NOT NULL,
    "discount_amount" TEXT NOT NULL,
    "pay_type" INTEGER NOT NULL DEFAULT 1,
    "source_type" INTEGER NOT NULL DEFAULT 1,
    "status" INTEGER NOT NULL DEFAULT 0,
    "order_type" INTEGER NOT NULL DEFAULT 1,
    "delivery_company" TEXT NOT NULL,
    "delivery_sn" TEXT NOT NULL,
    "auto_confirm_day" INTEGER NOT NULL,
    "integration" INTEGER NOT NULL,
    "growth" INTEGER NOT NULL,
    "promotion_info" TEXT NOT NULL,
    "bill_type" INTEGER NOT NULL DEFAULT 1,
    "bill_header" TEXT NOT NULL,
    "bill_content" TEXT NOT NULL,
    "bill_receiver_phone" TEXT NOT NULL,
    "bill_receiver_email" TEXT NOT NULL,
    "receiver_name" TEXT NOT NULL,
    "receiver_phone" TEXT NOT NULL,
    "receiver_post_code" TEXT NOT NULL,
    "receiver_province" TEXT NOT NULL,
    "receiver_city" TEXT NOT NULL,
    "receiver_region" TEXT NOT NULL,
    "receiver_detail_address" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "confirm_status" INTEGER NOT NULL DEFAULT 1,
    "delete_status" INTEGER NOT NULL DEFAULT 1,
    "use_integration" INTEGER NOT NULL,
    "payment_time" TIMESTAMP(3) NOT NULL,
    "delivery_time" TIMESTAMP(3) NOT NULL,
    "receive_time" TIMESTAMP(3) NOT NULL,
    "comment_time" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "focus" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "type" INTEGER DEFAULT 0,
    "focus_img" TEXT,
    "link" TEXT,
    "sort" INTEGER,
    "status" INTEGER DEFAULT 0,

    CONSTRAINT "focus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "articles_title_key" ON "articles"("title");

-- CreateIndex
CREATE UNIQUE INDEX "focus_title_key" ON "focus"("title");

-- AddForeignKey
ALTER TABLE "user_on_role" ADD CONSTRAINT "user_on_role_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_on_role" ADD CONSTRAINT "user_on_role_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
