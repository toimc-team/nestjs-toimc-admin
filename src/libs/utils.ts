import { createWriteStream } from 'fs';
import * as mkdirp from 'mkdirp';
import { extname, join } from 'path';
import * as dayjs from 'dayjs';
import { UPLOADDIR } from '../constants';

/**
 * 单个文件上传
 */
export const uploadFile = (file) => {
  // 1.获取当前日期
  const date = dayjs().format('YYYYMMDD');
  const d = getTime();
  // 2.根据日期创建目录
  const dir = join(__dirname, '..', `../../public/${UPLOADDIR}`, date);
  mkdirp.sync(dir);
  const uploadDir = join(dir, d + extname(file.originalname));
  // 3.实现上传
  const writeImage = createWriteStream(uploadDir);
  writeImage.write(file.buffer);
  // 4.返回图片保存的地址
  const saveDir = join(`${UPLOADDIR}`, date, d + extname(file.originalname));
  return saveDir;
};
/**
 * 获取时间戳
 */
const getTime = () => {
  const d = new Date();
  return d.getTime();
};
