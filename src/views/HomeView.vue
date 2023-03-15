<template>
       <!-- Modal -->
       <TransitionRoot :show="isOpen" as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
    <Dialog :open="isOpen" @close="setIsOpen">
      <div class="fixed inset-0 bg-black/30 backdrop-blur" aria-hidden="true" />
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 shadow-2xl">
          <DialogPanel class="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded bg-white shadow-2xl">
            <DialogTitle class="flex flex-col justify-end text-white font-bold leading-6 w-full bg-gradient-to-r from-cyan-500 to-blue-500">
              <img class="object-cover object-center h-64" :src="modalData.url_picture" :alt="modalData.name" />
            </DialogTitle>
            <DialogDescription class="space-y-3">
              
              <p>{{ modalData.description ?? "ไม่ได้ระบุ" }}</p>
              <div class="items-center flex flex-col gap-2">
                <h1 class="px-4 pt-4 text-2xl">{{ modalData.name ?? "ไม่ได้ระบุ" }}</h1>
                <ul class="flex gap-4">
                <li class="cursor-pointer flex gap-1 bg-green-100 hover:bg-green-200 rounded-full px-2 py-1 text-sm font-semibold text-green-700">
                  <ClockIcon class="w-4 h-4"/>
                  {{ modalData.operate_time ?? "ไม่ได้ระบุ" }}</li>
                <li class="cursor-pointer flex gap-1 rounded-full bg-pink-100 hover:bg-pink-300 text-pink-700 px-2 py-1 text-sm font-semibold">
                  <TagIcon class="w-4 h-4"/>
                  {{ modalData.type ?? "ไม่ได้ระบุ" }}</li>
                  <li class="cursor-pointer flex gap-1 rounded-full bg-sky-100 hover:bg-sky-300 text-sky-700 px-2 py-1 text-sm font-semibold">
                  <TagIcon class="w-4 h-4"/>
                  {{ modalData.location ?? "ไม่ได้ระบุ" }}</li>
              </ul>
              </div>
            </DialogDescription>
            <div class="flex flex-row-reverse gap-2 px-4 pb-4 pt-10">
              <button @click="reRandom" class="py-2 px-4 rounded bg-amber-200 hover:bg-amber-300 text-amber-700"><ArrowPathIcon class="w-4 h-4"/></button>
              <a :href="modalData.map_location" class="flex gap-1 items-center py-2 px-4 rounded bg-purple-200 hover:bg-purple-300 text-purple-700"> 
                <MapIcon class="w-4 h-4"/>
              </a>
              <button @click="setIsOpen(false)" class="py-2 px-4 rounded bg-red-200 hover:bg-red-300 text-red-700"><XMarkIcon class="w-4 h-4"/></button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <!-- End of Modal -->

  <div class="flex flex-col  md:flex-row gap-8 w-full p-16 bg-gradient-to-bl from-sky-300 to-blue-300 rounded shadow-md mb-8">
    <div id="left">
          <h1 class="font-bold text-4xl text-white">เว็บสุ่มอาหารบริเวณรอบ มข.</h1>
          <ul class="pl-8 py-6 text-white space-y-4">
            <li class="flex gap-4">
              <CheckIcon class="w-6 h-6 rounded-full ring-2 ring-sky-700 bg-sky-500"/>
              <h3 class="text-lg">เว็บใช้งานง่าย</h3>
            </li>
            <li class="flex gap-4">
              <CheckIcon class="w-6 h-6 rounded-full ring-2 ring-sky-700 bg-sky-500"/>
              <h3 class="text-lg">ใช้งานฟรี</h3>
            </li>
          </ul>
        <button class="flex w-full items-center gap-2 ml-6 p-4 my-4 text-lg justify-center bg-amber-300 text-amber-700 hover:bg-amber-500 hover:text-white shadow-lg" @click="random"><CursorArrowRaysIcon class="w-4 h-4"/><span>สุ่มร้านอาหาร</span></button>
        <div class="p-8 flex justify-center">
          <img src="@/assets/v1.png" class="w-32" alt="Beef">
        </div>
      </div>
    <div class="right md:ml-8">
      <div class="p-8 w-full h-full bg-gradient-to-l from-white/30 rounded text-white shadow-sm">
          <h3 class="font-baseline">เว็บไซต์นี้เป็นส่วนหนึ่งในรายวิชา GE362785 การคิดเชิงสร้างสรรค์และการแก้ปัญหา</h3>
          <button @click="isHidden = !isHidden" class="flex gap-2 items-center cursor-pointer mt-4 text-sm p-2 rounded border-2 shadow-sm hover:bg-sky-200">
            <ListBulletIcon class="w-4 h-4"/>
            <span>ดูรายชื่อกลุ่ม</span>
          </button>
          <ul id="groupList" class="md:block mt-4" :class="{ 'hidden': isHidden }">
            <li>นายไกรวิทย์ คำย้าว 623040002-0</li>
            <li>นายฉันท์วินัย นิลจันทร์ 623040005-4</li>
            <li>นางสาวญาณิศา ศรีทอง 623040008-8</li>
            <li>นายประวีร์ ติรวีรขจร 623040011-9</li>
            <li>นายภัทรภพ เหล่าสิงห์ 623040014-3</li>
            <li>นายไอโฮ โสมนาม 623040019-3</li>
            <li>นายภาณุ ประภาวสิทธิ์ 623040303-6</li>
            <li>นายอานนท์ ยิ่งยงยุทธ 623040356-5</li>
            <li>นานธนรัชต์ ผิวแดง 623040721-2</li>
            <li>นายธีธัช บุญศรี 623040722-0</li>
            <li>นายกาญจนภาสน์ ทองดีนอก 623040724-6</li>
          </ul>
      </div>
    </div>

  </div>
    <h1 class="my-4 text-2xl">รายชื่อร้านอาหารทั้งหมด</h1>
        <div class="columns-1 sm:columns-2 md:columns-3 gap-8 space-y-6">
          <div v-for="x in data" :key="x.id" class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:-translate-y-4 hover:scale-110 duration-100">
            <img class="w-full object-cover h-48" :src="x.url_picture" :alt="x.name" @click="fireModal(x)" />
            <div class="px-6 py-4" @click="fireModal(x)">
              <div class="flex font-bold text-xl gap-4">
                <span>
                    {{ x.name ?? "ไม่ได้ระบุ" }}
              </span>
        </div>
              <p class="text-gray-700 text-base">
                {{ x.description ?? "ไม่ได้ระบุ" }}
              </p>
            </div>
            <!-- Action buttons -->
            <div class="flex w-full justify-center p-1">
              <button class="flex p-1.5 gap-2 items-center hover:bg-gray-100 text-gray-700 text-sm px-2 rounded">
                <TagIcon class="w=4 h-4" />
                <span>{{ x.type }}</span>
              </button>
              <button class="flex p-1.5 gap-2 items-center hover:bg-gray-100 text-gray-700 text-sm px-2 rounded">
                <ClockIcon class="w-4 h-4" />
                <span>{{ x.operate_time }}</span>
              </button>
              <button class="flex p-1.5 gap-2 items-center hover:bg-gray-100 text-gray-700 text-sm px-2 rounded">
                <MapPinIcon class="w-4 h-4" />
                <span>{{ x.location ?? "0" }}</span>
              </button>
            </div>
          </div>
        </div>
    
    
</template>

<script setup lang="ts">
import Chips from 'primevue/chips';
import Button from 'primevue/button';
import Editor from 'primevue/editor';
import { ListBulletIcon, EyeIcon, BookmarkIcon, HeartIcon, ClockIcon, MapPinIcon, TagIcon, MapIcon, ArrowPathIcon, XMarkIcon, CheckIcon, CursorArrowRaysIcon } from '@heroicons/vue/24/outline'
import {ref} from 'vue';
import Modal from '@/components/Modal.vue'

const isChecked = ref(true); // Checkbox Search Button
const isOpen = ref(false);
function setIsOpen(value) {
  isOpen.value = value;
}

const modalData = ref([])
const random = () => {
  const result = Math.floor(Math.random() * data.value.length)
  setIsOpen(true);
  modalData.value.name = data.value[result].name;
  modalData.value.description = data.value[result].description;
  modalData.value.type = data.value[result].type;
  modalData.value.location = data.value[result].location;
  modalData.value.map_location = data.value[result].map_location;
  modalData.value.operate_time = data.value[result].operate_time;
  modalData.value.url_picture = data.value[result].url_picture;
  console.log(modalData);
  
  return modalData;
}

const reRandom = () => {
  setIsOpen(false);
  random();
}

const isHidden = ref(true);

const text = ref('');
const data = ref([
  {
    "name": "คินโนบูตะ",
    "description": "",
    "type": "ชาบู",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/ymEW48zZvuMDUAMP8",
    "operate_time": "11:00-22:00",
    "url_picture": "https://www.bloggang.com/data/imaginer/picture/1444630380.jpg"
  },
  {
    "name": "ปลาวาฬใจดี",
    "description": "",
    "type": "ชาบู",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/KWda1QDvG9ANXtGY7",
    "operate_time": "16:00-23:00",
    "url_picture": "https://lh3.googleusercontent.com/p/AF1QipNBAjDwMGn9pZo6vIgVvPPBwjcJha6vDNdH8fCe=s680-w680-h510"
  },
  {
    "name": "ปลาวาฬใจดี",
    "description": "",
    "type": "ชาบู",
    "location": "โนนม่วง",
    "map_location": "https://goo.gl/maps/xgVGLW6NvfQgQUTQ7",
    "operate_time": "16:00-23:00",
    "url_picture": "https://www.bloggang.com/data/imaginer/review/images/chuanchim_11_216_1.jpg"
  },
  {
    "name": "นิราชาบู ขอนแก่น Nira Shabu Khonkaen",
    "description": "",
    "type": "ชาบูู",
    "location": "โนนม่วง",
    "map_location": "https://goo.gl/maps/uMkwdvUihJ9GPKjv9",
    "operate_time": "11:30–22:00",
    "url_picture": "https://p16-va.topbuzzcdn.com/origin/tos-alisg-i-0000/a825272df76449fbb35cdcf4e19058a9.webp"
  },
  {
    "name": "เดอะนัว หมูกระทะ",
    "description": "",
    "type": "ปิ้งย่าง",
    "location": "โนนม่วง",
    "map_location": "https://goo.gl/maps/mSSLck4aJdfqEw349",
    "operate_time": "15.00–23.00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipMGdvb0H8UuipILKl3t3saRuSJ84aTlYW5HlB_5=w408-h303-k-no"
  },
  {
    "name": "Dragon Grill BBQ ดราก้อน กริลล์ บาร์บีคิว",
    "description": "",
    "type": "ปิ้งย่าง",
    "location": "โนนม่วง",
    "map_location": "https://goo.gl/maps/EQByrmBkBbKqyUNV9",
    "operate_time": "16:00–22:00",
    "url_picture": "https://lh3.googleusercontent.com/p/AF1QipOLHz5HauxbZOx4aW0E37zFr2nb-Wlqi1m5pDDy=s680-w680-h510"
  },
  {
    "name": "เฮียเปียวหมูเกาหลี",
    "description": "",
    "type": "ปิ้งย่าง",
    "location": "โนนม่วง",
    "map_location": "https://goo.gl/maps/fYZcpnDryyoxdR799",
    "operate_time": "16:30–21:30",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipPJ6tP3rJBPvW5-KRm7hZH7FP-0IDokWWJI0z_K=w475-h240-k-no"
  },
  {
    "name": "ขุนพล หมูกะทะ&ซีฟู้ด บุฟเฟ่ต์ทะเลเผา",
    "description": "",
    "type": "ปิ้งย่าง",
    "location": "โนนม่วง",
    "map_location": "https://goo.gl/maps/ZTAkjoRMBUSWCpYV7",
    "operate_time": "16:00–23:00",
    "url_picture": "https://img.wongnai.com/p/1920x0/2016/08/05/0b9e7a59e4e84181a3c6f57fccf6d481.jpg"
  },
  {
    "name": "เจ้าจอมหมูกระทะ(บ้านโนนม่วง)",
    "description": "",
    "type": "ปิ้งย่าง",
    "location": "โนนม่วง",
    "map_location": "https://goo.gl/maps/ST6u9mTRFZLh4NM9A",
    "operate_time": "16:30–22:30",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipOCKuGeyH0IlECEofJ_3bcNmSWRGuSaF7uprqvq=w408-h306-k-no"
  },
  {
    "name": "ทอมมี่ หมูย่างเกาหลี (Tommy)",
    "description": "",
    "type": "ปิ้งย่าง",
    "location": "โนนม่วง",
    "map_location": "https://goo.gl/maps/XrBHuc9MeVBKT5mh6",
    "operate_time": "15:30–23:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipN3QdiIy30VowiuutEt-abv29al-t16m0rlRtOD=w408-h408-k-no"
  },
  {
    "name": "ยูมิโกะหมูกระทะ",
    "description": "",
    "type": "ปิ้งย่าง",
    "location": "โนนม่วง",
    "map_location": "https://goo.gl/maps/RdaHSoCdAibeizVw6",
    "operate_time": "17:00–02:00",
    "url_picture": "https://lh3.googleusercontent.com/p/AF1QipMM8PFuO6s8F3dC3xrvGoT1GLaVVIRFJfLThJHw=s680-w680-h510"
  },
  {
    "name": "ก๋วยเตี๋ยวเรืออยุธยาคลอง 19",
    "description": "",
    "type": "ก๋วยเตี๋ยว",
    "location": "โนนม่วง",
    "map_location": "https://goo.gl/maps/2edN84K9tF65e6999",
    "operate_time": "10:00–19:30",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipMON-1NIx48JcfSClbX7sJeS4OgjtkZ0TBkSTvA=w408-h306-k-no"
  },
  {
    "name": "อมรินทร์เตี๋ยวเนื้อ",
    "description": "",
    "type": "ก๋วยเตี๋ยว",
    "location": "โนนม่วง",
    "map_location": "https://goo.gl/maps/QQ863TcvQzBGWMHK6",
    "operate_time": "10.30–18.00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipO0Z3G00V059iHwnxsbMFt95orztWwyCErmy22K=w408-h306-k-no"
  },
  {
    "name": "ธนาตย์ การลาบ",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "โนนม่วง",
    "map_location": "https://goo.gl/maps/AWyVfvBKSHyZ2zCr5",
    "operate_time": "11:00–20:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipPXFRrrwImSMaiXDLwkwUQEHy-H4MYGS-bVcZ2d=w408-h306-k-no"
  },
  {
    "name": "ครัวศรีประภา",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "โนนม่วง",
    "map_location": "https://goo.gl/maps/G8B4EdDiTAAcYSJs9",
    "operate_time": "08:00–20:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipP5h9DHdnuwLtMLnO8ntLq-05f7wGZaNVv1efgw=w408-h306-k-no"
  },
  {
    "name": "Bombay Indian Cuisine(อาหารอินเดีย)",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "โนนม่วง",
    "map_location": "https://goo.gl/maps/eFQaD5rUpPi8zLPH6",
    "operate_time": "11:00–21:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipMLhPFkynhxc85ZnjtP_uO0q9yaZIoelk9ngOp3=w408-h306-k-no"
  },
  {
    "name": "กะเพราวัยรุ่น",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "โคลัมโบ",
    "map_location": "https://goo.gl/maps/to5EyMfJT53uy1xL8",
    "operate_time": "10:00-20:00",
    "url_picture": "https://lh3.googleusercontent.com/p/AF1QipMbgLdxMmYGgPZTZO9iCxgvZA2TZaRTDVuu7xJ0=s680-w680-h510"
  },
  {
    "name": "Haus Dining",
    "description": "",
    "type": "Fine dining",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/3kwr8G1gSYFj4Xn16",
    "operate_time": "17:00-23:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipMXdfB6qB4dZHLLQixxQ2ZB1ozDPwd_0Mc9u7XZ=w408-h544-k-no"
  },
  {
    "name": "นายตอง หมูกระทะ",
    "description": "",
    "type": "ปิ้้งย่าง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/bxQ4uoRRZ6Xvja8L9",
    "operate_time": "16:30-23:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipOVm3ZxdbwFyrLAcX6ogv7Ncio3jxEHbtqHny7e=w426-h240-k-no"
  },
  {
    "name": "The sweet gallery",
    "description": "",
    "type": "ร้านอาหารสไตล์ครอบครัว",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/f1kQXprF4Po3Ngkj9",
    "operate_time": "11:00-22:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipPCu1mmDcwYv2kJ8GHWHIVVrGwXm3caV2Is9DMd=w408-h306-k-no"
  },
  {
    "name": "น้ำหนึ่งผัดไทย ประตูเขียว",
    "description": "",
    "type": "ผัดไทยและหอยทอด",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/Fn9qDcKt6LftSPDD7",
    "operate_time": "18:00-0:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipNXVNNRR-Z-MHNzLusCtcTAuS6P0svUNtww5-N_=w408-h544-k-no"
  },
  {
    "name": "สีนานวล คาเฟ่",
    "description": "",
    "type": "ร้านอาหารสไตล์ครอบครัว",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/rSaPXSC16qWCdJbK9",
    "operate_time": "10:00-23:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipP95JcGGuffqwk9hxsy5zCJ2VoCVi2IR1_hN-_4=w426-h240-k-no"
  },
  {
    "name": "แก่น",
    "description": "",
    "type": "Causual fine dining",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/qDpocyCsu2BTbCRR6",
    "operate_time": "11:00-21:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipOes_3l2aQpEM1lEAd6y8roeFoW28jtNfhphO5h=w426-h240-k-no"
  },
  {
    "name": "ดีดีซูชิ",
    "description": "",
    "type": "ซูชิหยิบเอง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/cPaXS5LZFYET22RC8",
    "operate_time": "13:00-23:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipOYIufHXfXBzlP5ytRshaZlhJCMxp-MMI_JkfXf=w408-h305-k-no"
  },
  {
    "name": "ก๋วยเตี๋ยวนายก๊อต",
    "description": "",
    "type": "ก๋วยเตี๋ยว",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/D1v3Y21HgH8pWDam8",
    "operate_time": "11:00-17:00",
    "url_picture": "https://img.wongnai.com/p/1920x0/2022/02/04/4c185f9f3d834331b0f9c154f592d70a.jpg"
  },
  {
    "name": "เดอะหมูไม่เพรา",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/ffWfUxxqfABVodq5A",
    "operate_time": "11:00-21:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipP6PlUtben93JDPipQ9oxY_mbWVczAmfMvq8nAb=w408-h306-k-no"
  },
  {
    "name": "The pizza company",
    "description": "",
    "type": "ร้านพิซซ่า",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/4hMQJvxyeE9qncsy8",
    "operate_time": "10:00-22:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipO-ty2i3RkrtwVbjzx_zzzBW3pDmfvAecBCv7J3=w426-h240-k-no"
  },
  {
    "name": "กะเพรานายโอ",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/hkrMuEmfW5KqtXrc8",
    "operate_time": "10:30-20:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipOq4Xn8DppC4gl13Ih_pdfpUWZenkS-I4MnvjPL=w426-h240-k-no"
  },
  {
    "name": "ปิ่นกระทะร้อน",
    "description": "",
    "type": "อาหารตามสั่ั่ง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/W8Sy4twTxHcXPUFu7",
    "operate_time": "17:00-23:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipN4rFiW5OD69YJcGWQxGbDlekd9_q3Z48YhJGWB=w408-h306-k-no"
  },
  {
    "name": "สเต็กลุงเมย์",
    "description": "",
    "type": "สเต็ก",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/Szdkoks9a5Kd5CU4A",
    "operate_time": "11:00-22:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipM4v3_U3hqLCAyuYyUBDsoMqyxvJSEWffCzR14X=w408-h306-k-no"
  },
  {
    "name": "แซ่บดาดปาก สุกี้กระทะร้อน",
    "description": "",
    "type": "สุกี้",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/KrbSnjZ427KypT6SA",
    "operate_time": "11:30-22:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipMxUuOipzNR_HoFJMdwGJUEwlLSFA4IOj9p7Ov3=w408-h306-k-no"
  },
  {
    "name": "แจ่วฮ้อนอภิรมย์",
    "description": "",
    "type": "ร้านแจ่วฮ้อน",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/4wfYWHrNF4Akj1xv9",
    "operate_time": "11:30-21:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipMv0ym3k7s_aFg6BU4aOklT_Xw1cSIiNrpriGlb=w408-h306-k-no"
  },
  {
    "name": "ใบเตย จิ้มจุ่ม",
    "description": "",
    "type": "จิ้มจุ่ม",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/ERdJZzdvpzUsXDW37",
    "operate_time": "16:30-22:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipPFUELLrxH1oX98a5_kjtbf0ranDqlEqxEiE_g4=w499-h240-k-no"
  },
  {
    "name": "กุ้งแจ่วฮ้อน",
    "description": "",
    "type": "ร้านแจ่วฮ้อน",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/bsZCQDXfA13dLBLJ8",
    "operate_time": "16:30-23:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipNP-gokhDViCkIVrxRoe8EQfWweyVT-418oiuNa=w408-h306-k-no"
  },
  {
    "name": "พี่แป้ง หมูกระทะ",
    "description": "",
    "type": "ร้านหมูกระทะ",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/9YucLMLDQLbTrovs9",
    "operate_time": "16:00-23:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipMrbU6tY7YkAlMZ-1-JC5zvdr2zwx7ulOouUPO4=w408-h306-k-no"
  },
  {
    "name": "โชคดี หม้อไฟ",
    "description": "",
    "type": "ชาบูหม่าล่า",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/WXhfAebv8eZuRLrp8",
    "operate_time": "15:30-22:30",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipMdmTjRQEkR9EpTl9SX7aab7ZxqMddAnE9oXmbT=w408-h306-k-no"
  },
  {
    "name": "ข้าวเหลือเกลืออิ่ม",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/QvCEbznwHXSomrxU6",
    "operate_time": "11:00-20:30",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipOPor2PJKvB1qnWk0MVKMd0_iNh8zljq5jibkG9=w426-h240-k-no"
  },
  {
    "name": "ภพหมูทอด",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/KgxZnSRtRnzVNGNw9",
    "operate_time": "09:30-20:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipN7kiaa33R9NjShJk-UttV1tVDZp58diU2NDzQ=w426-h240-k-no"
  },
  {
    "name": "โจ๊กป้าแดง",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/7cw53qmWXTpx8SVS6",
    "operate_time": "11:00-23:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipOZSScizykfEtEBQUJa_m31ckMjsmUpeq64WuwO=w426-h240-k-no"
  },
  {
    "name": "ไท่กั๋ว ฮอตพอต",
    "description": "",
    "type": "ชาบูหม่าล่า",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/UCERWwXDfHXRKVaT9",
    "operate_time": "15:00-23:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipNTHfoslfNDNuPeCNy8BxDKWOfn12P49S5t_aZU=w408-h272-k-no"
  },
  {
    "name": "ก๋วยเตี๋ยวเจ๊พร (บะหมี่พ่องตาย)",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/xMXgQDFZAqPZ7YHd9",
    "operate_time": "18:00-23:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipP5rejeakvJlkWY3MP-xqKrstPb37C8dO4j0Tms=w408-h306-k-no"
  },
  {
    "name": "ครัวอารยา",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/ap9aa7R5VG1TTd4r6",
    "operate_time": "-",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipPBjS2PFVZI9X5yOz7rJe2ItJlD4eg_7Rl6Wlrp=w408-h544-k-no"
  },
  {
    "name": "แปะตง",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/2FF2BxpUjT9Eyr369",
    "operate_time": "-",
    "url_picture": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=y79XPd3ZZwPcpMkOgoBwXw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=203.83942&pitch=0&thumbfov=100"
  },
  {
    "name": "โคตรกะเพราแท้",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "โคลัมโบ",
    "map_location": "https://goo.gl/maps/GacSEaCXcPbYAox27",
    "operate_time": "17:00-00:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipOxLfkQGLopLdG30VtS7-1LMBwbXDzm6hGJ_YZ4=w203-h203-k-no"
  },
  {
    "name": "ลาบพี่แก้ว",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "โคลัมโบ",
    "map_location": "https://goo.gl/maps/GEGQ96zQXHEScNTv9",
    "operate_time": "12:00 - 23:59",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipPrpHBbRdi9dcVVfJZb4s522b_cftOuPARcEOAP=w408-h306-k-no"
  },
  {
    "name": "ข้าวฟ่างมันไก่ตอน",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/W13xRDPtruoJPJb58",
    "operate_time": "15:30-00:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipOy6Z5eRmc3hIQbKQk-SjJyt-aWKMwCc0MZ1Ht1=w408-h544-k-no"
  },
  {
    "name": "โจ๊กเผาหม้อ",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/h8dcPnQq25TH3qgs7",
    "operate_time": "16:00-00:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipOr4nmuYICAqelwP231C1p6Pj3CMqsm6nGaER5R=w426-h240-k-no"
  },
  {
    "name": "ราเมนอิซากะยะ",
    "description": "",
    "type": "ราเมน",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/L9yoAMtUQ6cw3uCM7",
    "operate_time": "16:00-22:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipPP9fyuB20u3Gu-XsM6tCyitMj15HcO2OOjPxgU=w408-h544-k-no"
  },
  {
    "name": "ตำเมียป๋า",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/pFuyWuGNrPgo892GA",
    "operate_time": "10:30-20:30",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipPCjWRqmdFec8UTWlASwM_NMqM-OYKQxYnX-glm=w203-h155-k-no"
  },
  {
    "name": "ส้มตำรสไทย",
    "description": "",
    "type": "อาหารอิสาน",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/X1vfcinoxxFa1WkS9",
    "operate_time": "11:00-19:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipPQr5DhmRqeJEz5FrEgw4yXPAokpFBzJZcsL-3x=w203-h152-k-no"
  },
  {
    "name": "ส้มตำวัยรุ่น",
    "description": "",
    "type": "ส้มตำ",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/UTjkiDUuJJCHr6PH8",
    "operate_time": "10:00-20:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipPGPt4L6RgNmgcR4OAUFwS-HIuCW3zBHzH7UpEj=w203-h152-k-no"
  },
  {
    "name": "ครัวคุณลุง",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/w28vUN3BkujanCwy5",
    "operate_time": "09:30-19:45",
    "url_picture": "https://img.wongnai.com/p/1920x0/2021/05/05/d0c1cac17bfb4ace84c3d5479f0121df.jpg"
  },
  {
    "name": "สตังค์",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/ezWAwYn9tbMRq2uF7",
    "operate_time": "11:00-21:30",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipMGV-24k4EBn50ZK9G_1nkBab-gN6xbYmcpT6kZ=w408-h725-k-no"
  },
  {
    "name": "ตบตำ ยำแซ่บ",
    "description": "",
    "type": "ส้มตำ",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/VT4mriKTPeU4CRch8",
    "operate_time": "11:00-22:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipNTA6RNqEgskwwxmrTny5FSB9V7LnemEd1aLN3O=w408-h408-k-no"
  },
  {
    "name": "ฮ่องกงโบล์ว",
    "description": "",
    "type": "ร้านอาหารฮ่องกง",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/UzmRWo9vm21p3T8P9",
    "operate_time": "11:00-21:30",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipN20tLO45iYR2d4cfbOY8YgB6lVf032GBI1l7W5=w408-h272-k-no"
  },
  {
    "name": "หมูแดดเดียวทอดกระเทียม พิมาน (เจ้าแรก)",
    "description": "",
    "type": "ร้านหมูกรอบ",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/DtzRWLVvXPddeeG57",
    "operate_time": "10:00-21:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipMzputAz-nekOSJJqDgce1MLoqm5ZXpMJlbQ6vQ=w426-h240-k-no"
  },
  {
    "name": "ครัวแสนนา",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/Vzxh2vhRYGyuGbsy6",
    "operate_time": "08:00-21:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipMd-6cTcJ6Jh1phJ5R0j_WCuZtKFXUYmxGpPmAl=w408-h306-k-no"
  },
  {
    "name": "Before YUM",
    "description": "",
    "type": "ร้านยำ",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/nSkhPNgjeW6STvCd8",
    "operate_time": "12:00-21:00",
    "url_picture": "https://img.wongnai.com/p/1920x0/2020/08/17/9c2fca3e63364f06a30f6b838136834a.jpg"
  },
  {
    "name": "Sometime On A Sunday Korean BBQ",
    "description": "",
    "type": "ปิ้งย่าง",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/7UJCdqLCdHKxTJqw7",
    "operate_time": "16:00-22:30",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipO-OQc-cQR0dqkNIW10sFbbBRMRKDhPoj00Ga5B=s387-k-no"
  },
  {
    "name": "หม้อดินก๋วยจั๊บอุบล เจ้าเก่าหลัง มข.",
    "description": "",
    "type": "อาหารตามสั่ง",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/mUy3x2t1H764kkN57",
    "operate_time": "18:00-04:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipMIVg2R-uoylKY63USR90yNo-9LqcHpoBIPjfkf=w408-h305-k-no"
  },
  {
    "name": "Blue Jay's Burger",
    "description": "",
    "type": "Fast food",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/Yoi4nxeB3TYQMoEh7",
    "operate_time": "08:00-18:00",
    "url_picture": "https://img.wongnai.com/p/1920x0/2021/02/10/f4f487505ad2494da220a488e7ac0c61.jpg"
  },
  {
    "name": "นิราชาบู",
    "description": "",
    "type": "ชาบู",
    "location": "โนนม่วง",
    "map_location": "https://goo.gl/maps/WCQkyzKVargf4ihh9",
    "operate_time": "11:30-22:00",
    "url_picture": "https://img.wongnai.com/p/1920x0/2021/05/05/659c2e5619bc4671b11ce1d32415a47c.jpg"
  },
  {
    "name": "Galactose Cafe",
    "description": "",
    "type": "ร้านอาหารและคาเฟ่",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/jdyXrkBFsLYwv3DT8",
    "operate_time": "08:00-18:00",
    "url_picture": "https://img.wongnai.com/p/1920x0/2019/05/16/1e32c9fb66bd4612968c8b80484a296d.jpg"
  },
  {
    "name": "ลูกหมูสี่ตัว Korean B.B.Q.",
    "description": "",
    "type": "หมูกระทะ",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/hFp3fCthBYLGSnNM9",
    "operate_time": "16:00-00:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipMWgX4HgYn0Yc5mAPUM9ZObwUdozbL5jxxHMesU=w203-h152-k-no"
  },
  {
    "name": "KunKun BBQ Buffet ร้านอาหารเกาหลีคุณคุณ",
    "description": "",
    "type": "หมูกระทะ",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/uqrWygATTe1gishDA",
    "operate_time": "10:30-22:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipP3e3rqpJqh-pqUjdS-Iaqc9AzrbpAxGGIjq3v8=w203-h173-k-no"
  },
  {
    "name": "Beta House ",
    "description": "",
    "type": "ร้านไก่ทอด",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/4CGXptHzjqLJ9fb39",
    "operate_time": "11:00-00:00",
    "url_picture": "https://img.wongnai.com/p/1920x0/2022/08/07/638e2f44d0c7457695bd80c9c750bfe4.jpg"
  },
  {
    "name": "Chicky Peeps",
    "description": "",
    "type": "ไก่ทอด",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/nByysKfeSsN1Xzc69",
    "operate_time": "11:00-23:00",
    "url_picture": "https://img.wongnai.com/p/1920x0/2021/09/06/d8cdcc20b5034783a17b7e9eaf6889af.jpg"
  },
  {
    "name": "Pietro Garden",
    "description": "",
    "type": "ร้านอาหาร",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/AuGDCdLg657gtimF9",
    "operate_time": "16:00-22:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipOhnEb-5mH61X1DHu_5cy_SPr76OWfORzktNevy=w203-h152-k-no"
  },
  {
    "name": "Home coffee",
    "description": "",
    "type": "ร้านอาหาร+คาเฟ่",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/aiPmuLspEnBRT2g29",
    "operate_time": "11:00-21:30",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipOsN3TmZq_9bdFSZwLGYIqpPppFjLr9FuLhfniy=w203-h135-k-no"
  },
  {
    "name": "พริกไทย kitchen",
    "description": "",
    "type": "ร้านอาหาร",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/joFvxSKC2xFtTGDL6",
    "operate_time": "10:30-20:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipOouTZlXLAo9cvho3LnNsxQzT7Ec_CT07BKVt8B=w203-h152-k-no"
  },
  {
    "name": "โด๋ยหมูกรอบ",
    "description": "",
    "type": "ร้านหมูกรอบ",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/6xQqVckRCSMoTZEU7",
    "operate_time": "11:00-22:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipOhz0bDt7suONArnEt6jnuj2wS7B-xTFDQmZlQ5=w203-h135-k-no"
  },
  {
    "name": "Steak BKK 2",
    "description": "",
    "type": "สเต็ก",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/WV1XsgT6DcteFASv5",
    "operate_time": "11:30-22:30",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipONFfe8mILt02_rrWtLq-g8AHBzI6BpQdzAFN0q=w203-h152-k-no"
  },
  {
    "name": "T Bone Steak House",
    "description": "",
    "type": "สเต็ก",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/Mirf7HqmGguPNysF9",
    "operate_time": "16:00-22:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipPyVcT6iMjN1A6wruyrtSpa9NRvVSkOKi6w-UAN=w408-h281-k-no"
  },
  {
    "name": "Pizza Napoli",
    "description": "",
    "type": "ร้านอาหารฝรั่ง",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/TScQj4pLXVGAzvJ28",
    "operate_time": "10:00-22:00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipNbmYAOrF5aK3XE72MJbhs4nSZXwzJdOm3druSt=w203-h152-k-no"
  },
  {
    "name": "ตำไทยเลย",
    "description": "",
    "type": "ร้านส้มตำ",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/CtVMWiDsHQoUQH277",
    "operate_time": "10:30-20:30",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipMCE2e6lgU_CBEHqXC35wD3EFBwpUDj3LnHmaGp=w203-h152-k-no"
  },
  {
    "name": "Baka baka sushi",
    "description": "",
    "type": "อาหารญี่ปุ่น",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/UMQD3kyRnR4buYMi8",
    "operate_time": "10.30-20.30",
    "url_picture": "https://lh3.googleusercontent.com/p/AF1QipMs-nBCT28n9PL558PQ2VM79U8W-S9N-cw7zNQB=s1360-w1360-h1020"
  },
  {
    "name": "Haru hana",
    "description": "",
    "type": "อาหารญี่ปุ่น",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/nBUrwNFJdqWmpT9S8",
    "operate_time": "11.00-20.30",
    "url_picture": "https://lh3.googleusercontent.com/p/AF1QipN0SJsUI2awdFOUtpWuDR7xourVYIeV21YQ4Qq6=s1360-w1360-h1020"
  },
  {
    "name": "Little osaka",
    "description": "",
    "type": "อาหารญี่ปุ่น",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/PqGmAU5iwjicszZKA",
    "operate_time": "11.00-21.30",
    "url_picture": "https://lh3.googleusercontent.com/p/AF1QipNgDKRGNQoAii1fJni60e2p6UP4l2GPNxvlzhK_=s1360-w1360-h1020"
  },
  {
    "name": "Chickmax factory",
    "description": "",
    "type": "ร้านไก่ทอด",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/YbX176ob9AsoNbxJ9",
    "operate_time": "10.00-21.30",
    "url_picture": "https://lh3.googleusercontent.com/p/AF1QipP9PFEcsZlCv5WXP8FI-frpCsQfqUnTcLKBGNFF=s1360-w1360-h1020"
  },
  {
    "name": "มิตรภาพลาบก้อย",
    "description": "",
    "type": "ร้านลาบ",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/fujH2zhWQ4qf4LQN7",
    "operate_time": "16.00-23.00",
    "url_picture": "https://lh3.googleusercontent.com/p/AF1QipPyuaFaFLIEAFaLdIoaCtBXnCP8wD0uUShrUMyG=s1360-w1360-h1020"
  },
  {
    "name": "พ่อสนั่นลาบก้อย",
    "description": "",
    "type": "ร้านลาบ",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/soH9gpqwCAK28oxDA",
    "operate_time": "09.00-23.30",
    "url_picture": "https://lh3.googleusercontent.com/p/AF1QipOsOf71atgiW3v83m9HyDb6S_Tq24Xzj8JeQAJt=s1360-w1360-h1020"
  },
  {
    "name": "Texas chicken",
    "description": "",
    "type": "Fast food",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/CX729wHLn7YfWtrz6",
    "operate_time": "08.00-22.00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipN_MN8RJkRquD91wF83dli_ISXQkYDlWP0BtdJy=w203-h360-k-no"
  },
  {
    "name": "Smith fried chicken",
    "description": "",
    "type": "ร้านไก่ทอด",
    "location": "หลังมอ",
    "map_location": "https://goo.gl/maps/bN2B6iSRWWNqHtKH9",
    "operate_time": "11.00-22.30",
    "url_picture": "https://lh3.googleusercontent.com/p/AF1QipPzsHRPdrBX466hVxJ0C_hny42q-t3sTZLEzYAC=s1360-w1360-h1020"
  },
  {
    "name": "แดจังกึม",
    "description": "",
    "type": "บุฟเฟ่หมูกระทะ",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/zqyx5RADTRtzMp3n8",
    "operate_time": "10.30-22.00",
    "url_picture": "https://lh3.googleusercontent.com/p/AF1QipOIvDA6-g0dS3xDAE_QOlWYYzk6dIXBBRQBCceT=s1360-w1360-h1020"
  },
  {
    "name": "Soul mind",
    "description": "",
    "type": "อาหารเกาหลี",
    "location": "กังสดาล",
    "map_location": "https://goo.gl/maps/PD6Y8wV9yZBhFVBN8",
    "operate_time": "11.30-22.00",
    "url_picture": "https://lh3.googleusercontent.com/p/AF1QipPKAgKqeEWJ2WZz0lVSfYtG5I5_Q4CFitOxEJ47=s1360-w1360-h1020"
  },
  {
    "name": "Melt Beef by Chef Grand",
    "description": "",
    "type": "ร้านเนื้อ",
    "location": "โคลัมโบ",
    "map_location": "https://goo.gl/maps/f4fBvtKVz367QnLU7",
    "operate_time": "11.00-22.00",
    "url_picture": "https://lh5.googleusercontent.com/p/AF1QipOM4J0SOKvoGkj3gotenphsayK8ey2QETfgs-9D=w408-h306-k-no"
  }
]);
</script>