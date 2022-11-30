<script>
import { Router, Route, Link } from 'svelte-navigator'

import { MainPage } from '@/main-page'
</script>

<Router>
  <h1>The application</h1>

  <nav>
    <Link to="/">Root</Link>
    <Link to="about">About</Link>
  </nav>

  <Route path="about">
    <h3>About</h3>
    <p>That's what it's all about!</p>
  </Route>

  <Route>
    <MainPage />
  </Route>
</Router>
