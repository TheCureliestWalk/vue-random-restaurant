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

  <button class="mx-auto p-2 my-4 bg-amber-300 text-amber-700 hover:bg-amber-500 hover:text-white" @click="random">สุ่มร้านอาหาร</button>
        <div class="columns-1 sm:columns-2 md:columns-3 gap-8 space-y-6">
          <div v-for="x in data" :key="x.id" class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:-translate-y-4 hover:scale-110 duration-100">
            <img class="w-full object-cover h-48" :src="x.url_picture" :alt="x.name" @click="fireModal(x)" />
            <div class="px-6 py-4" @click="fireModal(x)">
              <div class="flex font-bold text-xl mb-2 gap-4">
                <span>
                    {{ x.name ?? "ไม่ได้ระบุ" }}
              </span>
            <span class="inline-block bg-pink-100 hover:bg-pink-200 rounded-full px-3 py-1 text-xs font-semibold text-pink-700 mr-2 mb-2">#{{ x.type }}</span>
        </div>
              <p class="text-gray-700 text-base">
                {{ x.description ?? "ไม่ได้ระบุ" }}
              </p>
            </div>
            <!-- Action buttons -->
            <div class="flex w-full justify-center p-1">
              <button class="flex p-1.5 gap-2 items-center hover:bg-gray-100 text-gray-700 text-sm px-2 rounded">
                <ClockIcon class="w-4 h-4" />
                <span>{{ x.operate_time }}</span>
              </button>
              <button class="flex p-1.5 gap-2 items-center hover:bg-gray-100 text-gray-700 text-sm px-2 rounded">
                <MapPinIcon class="w-4 h-4" />
                <span>{{ x.location ?? "0" }}</span>
              </button>
              <button class="flex p-1.5 gap-2 items-center hover:bg-gray-100 text-700 text-sm px-2 rounded">
                <HeartIcon class="w-4 h-4" />
                <span>{{ x.like ?? "0" }}</span>
              </button>
            </div>
          </div>
        </div>
    
    
</template>

<script setup>
import Chips from 'primevue/chips';
import Button from 'primevue/button';
import Editor from 'primevue/editor';
import { EyeIcon, BookmarkIcon, HeartIcon, ClockIcon, MapPinIcon, TagIcon, MapIcon, ArrowPathIcon, XMarkIcon } from '@heroicons/vue/24/outline'
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
        "url_picture": "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/327176146_553362183417518_1988742025795300089_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=h15GxDX1yUsAX-7Zb2v&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfBkVP9zvo91ndlCMmeI7h3tBHm496N7Uu6klwAtOravBQ&oe=6415C27D"
    },
    {
        "name": "ปลาวาฬใจดี",
        "description": "",
        "type": "ชาบู",
        "location": "โนนม่่วง",
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
        "url_picture": "https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/317901683_599535228843908_4193776549807131251_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG5Cdu0pU0g5KuF-0_M2PRIdJiNdh8cW-V0mI12Hxxb5WlTAsbPSSY6yUsjmOshvqjO4BL2dSeNG0DiyuiYLzMF&_nc_ohc=AnrUXY4gxSIAX8cB3nA&_nc_ht=scontent.fbkk18-2.fna&oh=00_AfBAURrVg_8sULQ0ZY0HApHxk1JaDdfg6iRqsPi2o5O44w&oe=64151F22"
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
        "url_picture": "https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/301823850_116381777848241_883790800472252766_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEKb2NoROjZJej2YkgtdX_yjr_MEr1IaGaOv8wSvUhoZj235ijKv-8Jexk2iRZ8YIcXR1HF40ppKv8vEj64mq7i&_nc_ohc=PZDt4MB9u70AX9cxykj&_nc_ht=scontent.fbkk18-2.fna&oh=00_AfDR3FOYW9HsVpcruMJQcYGXGeKsrc4sEDknkcaanUjcPA&oe=64149433"
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
        "url_picture": "https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/334226474_1378628406037312_6313272849273104652_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHKiEktd8V-rFScTnE6lfk1jZq7O2nCv8aNmrs7acK_xiJIi3j7PlE5taPsuDalI5YshywkSBmkXnADcnFn9TrJ&_nc_ohc=iehQBfqxZScAX_g0n6P&_nc_ht=scontent.fbkk18-2.fna&oh=00_AfAs_4QW4BQHiCS6vVIm4dwu8Rmduyij317Zq6opHo-8Ug&oe=64142F50"
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
    }
]);
</script>