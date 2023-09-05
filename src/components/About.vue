<template>
    <div class="about">
        <div class="title">
            <h1>budget </h1>
            <h1 class="tracker">tracker</h1>
        </div>
            <p>Discover financial freedom and confidence with our Budget
                Tracker—a streamlined tool designed to simplify your financial journey.
                Seamlessly track income and expenses, set goals, and visualize spending patterns through intuitive graphs.
                With secure access from any device, take charge of your finances and make informed decisions effortlessly. 
                Start your journey towards a brighter financial future today.
            </p>
    </div>
</template>

<style scoped>
.about{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    width: 30rem;
    box-sizing: border-box;
}
.title>h1{
    font-size: 90px;
    font-family: 'Poppins', sans-serif;
}
h1.tracker{
    display: flex;
    justify-content: end;
    align-items: end;
}
.about>p{
    margin-top: 20px;
    color: #EFF7B1;
}
</style>