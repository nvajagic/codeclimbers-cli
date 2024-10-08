import vscodeLogo from '@app/assets/source-logos/vscode.png'
import chromeLogo from '@app/assets/source-logos/chrome.webp'

export interface SourceDetails {
  name: string
  displayName: string
  link: string
  logo: string
  instructions: string
  type: string
}

export const supportedSources: SourceDetails[] = [
  {
    name: 'vscode',
    displayName: 'Visual Studio Code',
    logo: vscodeLogo,
    link: 'https://marketplace.visualstudio.com/items?itemName=CodeClimbers.vscode-codeclimbers',
    instructions: `
      <li>Press F1 or CMD + Shift + P and type install. Pick Extensions: Install Extension.</li>
      <li>Type codeclimbers and hit enter.</li>
      <li>Click Install.</li>
      <li>You may need to reload the editor to activate the extension.</li>
    `,
    type: 'code',
  },
  {
    name: 'chrome',
    displayName: 'Chromium Browser',
    logo: chromeLogo,
    link: 'https://chromewebstore.google.com/detail/code-climbers/fdmoefklpgbjapealpjfailnmalbgpbe',
    instructions: `
      <li>Click the three dots in the top right corner of your browser.</li>
      <li>Click More Tools, then Extensions.</li>
      <li>Click the three dots in the top right corner of the Extensions page.</li>
      <li>Click Open Chrome Web Store.</li>
      <li>Search for CodeClimbers and click Add to Chrome.</li>
      <li>Give the extension permissions to read and change site data if prompted.</li>
    `,
    type: 'web',
  },
  // Firefox is not supported yet
  // {
  //   name: 'firefox-code_climbers',
  //   displayName: 'Firefox',
  //   logo: firefoxLogo,
  //   instructions: `
  //     <h2>Installing</h2>
  //     <p>Click the three lines in the top right corner of your browser.</p>
  //     <p>Click Add-ons.</p>
  //     <p>Search for CodeClimbers and click Add to Firefox.</p>
  //     <p>Give the extension permissions to read and change site data if prompted.</p>
  //   `,
  // },
]
