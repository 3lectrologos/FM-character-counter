import '@fontsource-variable/dm-sans'
import Header from '@/components/Header.tsx'
import TextInput from '@/components/TextInput.tsx'

function App() {
  return (
    <div className="text-neutral-50 flex min-h-dvh justify-center bg-[url('./assets/images/bg-light-theme.png')] bg-cover bg-repeat p-4 pb-8 dark:bg-[url('./assets/images/bg-dark-theme.png')]">
      <main className="flex w-full flex-col gap-500">
        <Header />
        <p className="text-center txt-preset-1">
          Analyze your text in real-time.
        </p>
        <TextInput />
      </main>
    </div>
  )
}

export default App
