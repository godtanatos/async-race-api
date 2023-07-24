import { renderGarage } from '../Garage';

export const renderPage = (): string => `<header class="header">
<div class="header__wrapper">
  <h1 class="title__header">Async Race Game</h1>
  <img class="logo__header" src="./public/pngegg.png" alt="logo game">
</div>
<button type="button" class="btn header-garage-btn">garage</button>
<button type="button" class="btn header-winners-btn">winners</button>
</header>
<main id="garage-page">
<div class="forms-container">
  <form class="form create-form" id="create-form">
    <input class="input" id="create-name" name="name" type="text" required />
    <input class="color" id="create-color" name="color" type="color" value="#ffffff" />
    <button class="btn" type="submit">Create</button>
  </form>
  <form class="form update-form" id="update-form">
    <input class="input" id="update-name" name="name" type="text" disabled required />
    <input class="color" id="update-color" name="color" type="color" value="#ffffff" disabled />
    <button class="btn" id="update-btn" type="submit" disabled>Update</button>
  </form>
</div>
<ul class="controls-list">
  <li class="item"><button class="btn race-btn" id="race">Race</button></li>
  <li class="item"><button class="btn reset-btn" id="reset" disabled>Reset</button></li>
  <li class="item"><button class="btn generate-btn" id="generate">Generate</button></li>
</ul>
<div id="garage" class="garage">${renderGarage()}</div>
<div>
  <p class="win-message hidden" id="win-message"></p>
</div>
</main>
<div id="winners-page" class="winners-page">--------{renderWinners()}-------</div>
<div class="pagination">
<button class="btn prev-button" disabled id="prev">←</button>
<button class="btn next-button" id="next">→</button>
</div>`;
