-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "body" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
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

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Focus" (
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

    CONSTRAINT "Focus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Article_title_key" ON "Article"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Focus_title_key" ON "Focus"("title");
