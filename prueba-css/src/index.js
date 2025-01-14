var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `
  <header>
    <h1>Unique Element Challenge</h1>
    <img src="src/assets/logo.svg" alt="Logo" />
  </header>

  <section>
    <div class="content-left">
      <h2>Target</h2>
      <div>Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</div>

      <h2>Considerations</h2>
      <ul>
        <li>Values are <b>duplicated only twice</b>.</li>
        <li>There is <b>only one non duplicate value</b>.</li>
        <li>The non duplicate value can be placed <b>anywhere on the array</b>.</li>
        <li>The result must be an <b>integer</b>.</li>
      </ul>
    </div>
  
    <div class="content-right">
      <div class="block">
        <h2>Test Data</h2>
        <div>${arrayTest}</div>
      </div>
        
      <div class="block">
        <h2>Expected result</h2>
        <div>4</div>
      </div>

      <div class="block">
        <h2>Your Result</h2>
        <div>4</div>
      </div>
    </div>
  </section>
`;
