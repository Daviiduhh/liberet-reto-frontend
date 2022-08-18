<template>
  <section class="days">
    <div
      class="day"
      v-for="day in days"
      :key="day.number"
      @click="selected = day.number"
    >
      <span class="day__name" v-text="day.name"></span>
      <span
        class="day__number"
        :class="selected == day.number ? 'selected' : ''"
        v-text="day.number"
      ></span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const days = ref([]);
const selected = ref(new Date().getDate());

onMounted(() => {
  const date = new Date();
  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  let week = [];

  for (let i = 0; i <= 6; i++) {
    const first = date.getDate() - date.getDay() + i;
    const day = new Date(date.setDate(first)).toISOString().slice(0, 10);
    const dayNumber = day.split("-")[2];
    week.push({
      number: dayNumber,
      name: dayNames[i],
    });
  }

  days.value = week;
});
</script>

<style lang="scss" scoped>
.selected {
  background-color: #fcab3f;
}
.days {
  z-index: 10;
  background-color: #fff;
  padding: 0.3rem 1rem;
  width: calc(100% - 2rem);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.day {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.1rem;

  &__name {
    font-weight: 600;
    font-size: 0.8rem;
  }

  &__number {
    font-size: 0.8rem;
    border-radius: 50%;
    width: 1.6rem;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
