<template>
    <header>
        <div class="container">
            <div class="nav-inner">
                <h2>Top Student</h2>
                <nav>
                    <select name="grade" id="grade" @click="handleClick">
                        <option default value="8th">8th Students</option>
                        <option value="9th">9th Students</option>
                        <option value="10th">10th Students</option>
                    </select>
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>

import { useMessagesStore } from '../stores/Messages';

const store = useMessagesStore();

const handleClick = () => {
    const opt = document.querySelector('#grade');
    store.setGrade(opt.value);
}

</script>

<style scoped>

</style>