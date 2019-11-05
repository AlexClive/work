<template>
  <div id="code">
    <div v-highlight>
       <pre>
        <code class="css">
      @font-face {
        font-family: Chunkfive; src: url('Chunkfive.otf');
      }

      body, .usertext {
        color: #F0F0F0; background: #600;
        font-family: Chunkfive, sans;
        --heading-1: 30px/32px Helvetica, sans-serif;
      }

      @import url(print.css);
      @media print {
        a[href^=http]::after {
          content: attr(href)
        }
      }
    </code>
       </pre>
    </div>

    <div v-highlight>
      <pre>
      <code class="hljs">
        it("should replace API calls with minified names", () => {
        let content = "hljs.COMMENT(); hj.NUMBER_MODE == 0; a = hljs.endRe";
          content.replace(utility.regex.replaces, utility.replaceClassNames).should.equal(
              "hljs.C(); hj.NM == 0; a = hljs.eR"
          );
        });
      </code>
    </pre>
    </div>

  </div>
</template>

<script>



    export default {
        name: "code",
        data(){
            return{
              html:' <h2>foo</h2>'
            }
        },
        methods:{

        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
