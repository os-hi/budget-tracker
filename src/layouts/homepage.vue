<template>
    <div class="window">
        <header>
            <div class="logo">Budget Tracker</div>
            <button>Sign up</button>
        </header>
        <slot />
    </div>
</template>

<style scoped>
.window{
    width: 100vw;
    height: 100vh;
}
header{
    position: relative;
    width: 100vw;
    padding: 8px 12px 8px  12px;
    margin: 0;
    display: flex;
    justify-content:space-between;
    background-color: #3F3E41;
    box-sizing: border-box;
}
header>div{
    padding: 5px;
    color:#E3F56F ;
    font-weight: bold;
}
header>button{
    padding: 5px;
    border-radius: 8px;
    background-color: #8255E4;
    border: none;
    color: #fff;
    font-size: 12px;
}
</style>