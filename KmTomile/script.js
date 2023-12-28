      function r1() {
        const a = document.getElementById("shyam").value;

        const r = a * 0.621371;

        // console.log(r)
        document.getElementById("output").innerText = `${a} Kilometers is approximately ${r.toFixed(3)} miles`;
      }
