import sleep from 'await-sleep';
import { IVideoAsset } from './index.d';
const data: IVideoAsset[] = require('./assets.json');

export async function fetchMovies(offset = 0, limit?: number) {
  await sleep(1000);
  return data.slice(offset, limit || data.length);
}
export async function fetchMoviesByTitle(
  title: string,
  offset = 0,
  limit?: number
) {
  await sleep(500);
  return data
    .filter(asset =>
      (asset.title.toLowerCase() || '').includes(title.toLowerCase())
    )
    .slice(offset, limit || data.length);
}
