export const randomChooseFromApiToken = () => {
  const keys = process.env.OPENAI_API_KEY?.split(',')
  return sample(keys)
}

const sample = (arr: any[] = []) => {
  const len = arr === null ? 0 : arr.length
  return len ? arr[Math.floor(Math.random() * len)] : undefined
}