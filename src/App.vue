<template>
    <div id="root">
        <Header />
        <hr />
        <Body />
        <Footer />
    </div>
</template>

<script>
import Header from './components/header'
import Body from "./components/body"
import Footer from "./components/footer"

export default {
    name: 'app',
    components: {
        Header,
        Body,
        Footer
    }
}
</script>

<style lang="scss">
#root{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    // height: 97vh;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.header{
    width: 100%;
    max-width: 1200px;
}
.body{
    flex: 1;
    width: 100%;
    max-width: 1200px;
}
.footer{
    flex: 1;
}
hr{
    border: 0;
    border-bottom: 1px solid lightgray;
    margin-top: -14px;
    width: 60%;
    margin-left: 24%;
}
</style>


