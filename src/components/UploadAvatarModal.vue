<template>
    <ModalComponent :open="open">
        <div class="border-2 border-black rounded-lg pt-2 bg-white flex flex-col items-center w-[400px] h-[300px]">
            <h6 class="text-xl font-medium text-black mt-2 mb-6">{{ $t('Upload/Change avatar') }}</h6>
            <form action="" @submit.prevent="uploadAvatar">
                <input type="file" name="avatar" id="avatar" class="hidden" ref="avatar" @change="avatarSelected">
                <p class="text-sm text-red-500 mb-1">Click the image to change/upload</p>
                <div class="mb-10 flex justify-center">
                    <div class="rounded-full border-black border-2 w-32 h-32" >
                        <img :src="placeHold" alt="" class="rounded-full border-black border-2 w-32 h-32" @click="selectAvatar">
                    </div>
                </div>
                <div class="flex gap-10">
                    <button class="px-8 py-3 border-2 rounded-lg border-black float-right text-sm font-semibold shadow-md shadow-[#000000] w-full" type="submit" :disabled="processing">{{ $t('Upload') }}
                    </button>
                    <button class="px-8 py-3 border-2 rounded-lg border-black float-right text-sm font-semibold shadow-md shadow-[#000000] w-full" type="button" :disabled="processing" @click="$emit('closeModal')"> {{ $t('Cancel') }} </button>
                </div>
            </form>
        </div>
    </ModalComponent>

</template>

<script setup>
import ModalComponent from "@components/ModalComponent.vue";
import {ref, defineEmits, computed} from "vue";
import { web3modal } from '@/utils/wallet'
import userPlaceHolderImage from "@/assets/user.png";
import {useUserStore} from "@/stores/user";
import user from "@/store/modules/user";


defineProps(['open']);
const userStore = useUserStore();
const userInfo = userStore.userInfo;

const emits = defineEmits(['closeModal']);

const avatar = ref(null);
const processing = ref(false);
const errorMessage = ref('');
const successMessage = ref('Avatar uploaded successfully');
const successful = ref(false);

const placeHold = computed({
    get() {
        return userInfo?.avatar !== '' ? userInfo?.avatar : userPlaceHolderImage
    },
    set(avatar) {
        userInfo.avatar = avatar
    }
});

const selectAvatar = () => {
    avatar.value.click();
}

// @click="$emit('closeModal')"
const avatarSelected = () => {
    const input = avatar.value;
    const files = input.files
    if (files && files[0]) {
        const reader = new FileReader
        reader.onload = e => {
            console.log(e.target.result)
            placeHold.value = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
    }
}

const uploadAvatar = async () => {
    processing.value = true;
    try {
        const response = await userStore.updateAvatar(usernameForm.username);
        if (response.message){
            errorMessage.value = '';
            successful.value = true;
            setTimeout(() => {
                emits('isSuccess')
            }, 2000)
        }
    }catch (e) {
        errorMessage.value = e.message;
        successful.value = false
    }
    processing.value = false;
}
</script>