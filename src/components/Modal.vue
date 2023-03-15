<template>
     <!-- Modal -->
  <TransitionRoot :show="isOpen" as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
    <Dialog :open="isOpen" @close="setIsOpen">
      <div class="fixed inset-0 bg-black/30 backdrop-blur" aria-hidden="true" />
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 shadow-2xl">
          <DialogPanel class="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded bg-white shadow-2xl">
            <DialogTitle class="flex flex-col justify-end text-white font-bold leading-6 w-full bg-gradient-to-r from-cyan-500 to-blue-500">
              <img class="object-cover object-center h-64" :src="url_picture" :alt="name" />
              <h1 class="pt-4 pl-4 text-4xl w-full bg-slate-700 bg-opacity-10">{{ name ?? "ไม่ได้ระบุ" }}</h1>
            </DialogTitle>
            <DialogDescription class="p-4 space-y-3">
              <h2>คำอธิบาย</h2>
              <p>{{ description ?? "ไม่ได้ระบุ" }}</p>
              <h2>ส่วนผสม</h2>
              <ul>
                <li class="cursor-pointer inline-block bg-green-100 hover:bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2" v-for="ingredient in modalData.ingredient">{{ ingredient ?? "ไม่ได้ระบุ" }}</li>
              </ul>
              <h2>วิธีทำ</h2>
              <div class="prose">{{ modalData.step ?? "ไม่ได้ระบุ" }}</div>
              <h2>แท็ก</h2>
              <ul class="flex gap-3">
                <li v-for="tag in modalData.tag" class="list-none rounded bg-pink-100 hover:bg-pink-300 text-pink-700 px-2 py-1 cursor-pointer">{{ tag ?? "ไม่ได้ระบุ" }}</li>
              </ul>
              <h2>อ้างอิง</h2>
              <ul class="flex gap-3">
                <li class="list-none rounded bg-blue-100 hover:bg-blue-300 text-blue-700 px-2 py-1 cursor-pointer">{{ modalData.source ?? "ไม่ได้ระบุ" }}</li>
              </ul>
            </DialogDescription>
            <div class="flex flex-row-reverse gap-4 px-4 pb-4 pt-4">
              <button @click="setIsOpen(false)" class="py-2 px-4 rounded bg-purple-200 hover:bg-purple-300 text-purple-700">ไปยังเว็บไซต์ต้นทาง</button>
              <button @click="setIsOpen(false)" class="py-2 px-4 rounded bg-red-200 hover:bg-red-300 text-red-700">ออก</button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

defineProps(['name', 'description', 'type', 'location', 'map_location', 'operate_time', 'url_picture'])

// Modal
const isChecked = ref(true); // Checkbox Search Button
const isOpen = ref(true);
function setIsOpen(value) {
  isOpen.value = value;
}
let modalData = ref({});
const fireModal = (food) => {
  modalData.value = {};
  setIsOpen(true);
  modalData.value.id = food.id;
  modalData.value.name = food.name;
  modalData.value.description = food.description;
  modalData.value.ingredient = food.ingredient;
  modalData.value.picture_url = food.picture_url;
  modalData.value.source = food.source;
  modalData.value.step = food.step;
  modalData.value.tag = food.tag;
  console.log(food);
  return modalData;
};
</script>
