/*
  Warnings:

  - You are about to drop the column `roleId` on the `permissions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "permissions" DROP CONSTRAINT "permissions_roleId_fkey";

-- AlterTable
ALTER TABLE "permissions" DROP COLUMN "roleId";
