import readline from 'readline'

const input = readline.createInterface({
  input: process.stdin
})

export const intro = (nextStep: () => void = null): void => {
  console.log('------- Shopping Cart Amount Calculator -------')
  console.log('You must put the files in the right format as')
  console.log('descripted in README file into the mocks folder')
  console.log('-----------------------------------------------')
  console.log('\nPress ENTER to continue...')

  input.question('', (_value: string) => {
    input.close()
  })

  input.on('close', () => {
    if (nextStep) nextStep()
    process.exit(0)
  })
}
