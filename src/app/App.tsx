import { Providers } from '@/app/providers';
import { AppRouter } from '@/app/routers/AppRouter';

function App() {

  return (
    <Providers>
      <AppRouter />
    </Providers>
  )
}

export default App
