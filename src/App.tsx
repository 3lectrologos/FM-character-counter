'use client'

import '@fontsource-variable/dm-sans'
import Header from '@/components/Header.tsx'
import TextInput from '@/components/TextInput.tsx'
import { useState } from 'react'
import Stats from '@/components/Stats.tsx'

function App() {
  const [text, setText] = useState('')
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [characterLimitEnabled, setCharacterLimitEnabled] =
    useState<boolean>(false)
  const [characterLimit, setCharacterLimit] = useState<number>(100)

  return (
    <div className="flex min-h-dvh justify-center bg-[url('./assets/images/bg-light-theme.png')] bg-cover bg-repeat p-200 pb-400 tablet:px-400 dark:bg-[url('./assets/images/bg-dark-theme.png')]">
      <main className="flex w-full max-w-[990px] flex-col gap-500 desktop:gap-600">
        <Header />
        <p className="self-center text-center txt-preset-1 tablet:max-w-[520px] dark:text-neutral-100">
          Analyze your text in real-time.
        </p>
        <TextInput
          text={text}
          onTextChange={setText}
          excludeSpaces={excludeSpaces}
          onExcludeSpacesChange={setExcludeSpaces}
          characterLimitEnabled={characterLimitEnabled}
          onCharacterLimitEnabledChange={setCharacterLimitEnabled}
          characterLimit={characterLimit}
          onCharacterLimitChange={setCharacterLimit}
        />
        <Stats text={text} excludeSpaces={excludeSpaces} />
      </main>
    </div>
  )
}

export default App
