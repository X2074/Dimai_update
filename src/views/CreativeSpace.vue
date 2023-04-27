<script setup>
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";
import WalletIcon from "@components/WalletIcon.vue";
import SecondaryButton from "@components/SecondaryButton.vue";
import WalletIcon2 from "@components/icons/WalletIcon2.vue";
const doNothing = (event) => {
    event.preventDefault();
    return false;
}
</script>

<template>
  <Header />
  <div class="my-container p-4 md:p-0 mt-16 md:mt-44">
    <div class="flex mb-36 justify-between">
      <h2 class="text-xl md:text-5xl font-semibold">Creative Space</h2>
      <div class="flex justify-between text-2xl">
        <a href="" class="text-black font-bold mx-1 md:mx-10 text-2xl">Trending</a>
        <a href="" class="text-black font-bold mx-1 md:mx-10 text-2xl">Newest</a>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-3">
        <div class="card flex items-center justify-center">
            <a class="relative block w-full h-full bg-gray-900 group"
               href="#" @click="doNothing">
                <img class="absolute inset-0 object-cover
                                w-full h-full group-hover:opacity-50"
                     src=
                       "https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png" />
                <div class="absolute p-0 bottom-0 w-full rounded-md">
                    <div class="mt-0">
                        <div class="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0">
                            <div class="px-7 py-4 bg-gray-300">
                                <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                                <div class="flex items-end mt-3">
                                    <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
                                    <div class="flex items-start flex-col mb-2">
                                        <h6 class="font-semibold">Someone</h6>
                                        <p class="flex">
                                            <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                                            0xqwertyuiopasdfghjklzxcvbnm
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>

        <div class="card">
            <div class="w-full h-full p-10">
                <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
            </div>
            <div class="relative w-full h-40 bg-gray-200 px-10 py-6 -top-40 rounded-md">
                <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                <div class="flex items-end mt-3">
                    <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
                    <div class="flex items-start flex-col mb-2">
                        <h6 class="font-semibold">Someone</h6>
                        <p class="flex">
                            <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                            0xqwertyuiopasdfghjklzxcvbnm
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header w-80">
                <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
            </div>
            <div class="card-footer">
                <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                <div class="flex items-start">
                    <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
                    <div class="userinfo-username">
                        <h6 class="font-semibold">Someone</h6>
                        <p class="flex">
                            <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                            0xqwertyuiopasdfghjklzxcvbnm
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header w-80">
                <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
            </div>
            <div class="card-footer">
                <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                <div class="flex items-start">
                    <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
                    <div class="userinfo-username">
                        <h6 class="font-semibold">Someone</h6>
                        <p class="flex">
                            <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                            0xqwertyuiopasdfghjklzxcvbnm
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header w-80">
                <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
            </div>
            <div class="card-footer">
                <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                <div class="flex items-start">
                    <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
                    <div class="userinfo-username">
                        <h6 class="font-semibold">Someone</h6>
                        <p class="flex">
                            <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                            0xqwertyuiopasdfghjklzxcvbnm
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header w-80">
                <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
            </div>
            <div class="card-footer">
                <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                <div class="flex items-start">
                    <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
                    <div class="userinfo-username">
                        <h6 class="font-semibold">Someone</h6>
                        <p class="flex">
                            <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                            0xqwertyuiopasdfghjklzxcvbnm
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header w-80">
                <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
            </div>
            <div class="card-footer">
                <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                <div class="flex items-start">
                    <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
                    <div class="userinfo-username">
                        <h6 class="font-semibold">Someone</h6>
                        <p class="flex">
                            <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                            0xqwertyuiopasdfghjklzxcvbnm
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header w-80">
                <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
            </div>
            <div class="card-footer">
                <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                <div class="flex items-start">
                    <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
                    <div class="userinfo-username">
                        <h6 class="font-semibold">Someone</h6>
                        <p class="flex">
                            <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                            0xqwertyuiopasdfghjklzxcvbnm
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header w-80">
                <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
            </div>
            <div class="card-footer">
                <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                <div class="flex items-start">
                    <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
                    <div class="userinfo-username">
                        <h6 class="font-semibold">Someone</h6>
                        <p class="flex">
                            <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                            0xqwertyuiopasdfghjklzxcvbnm
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header w-80">
                <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
            </div>
            <div class="card-footer">
                <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                <div class="flex items-start">
                    <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
                    <div class="userinfo-username">
                        <h6 class="font-semibold">Someone</h6>
                        <p class="flex">
                            <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                            0xqwertyuiopasdfghjklzxcvbnm
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="pagination">
      <div class="pagination-items">
        <secondary-button>&lt;</secondary-button>
        <a class="pagination-item active">1</a>
        <a class="pagination-item">2</a>
        <a class="pagination-item">3</a>
        <a class="pagination-item">4</a>
        <secondary-button>&gt;</secondary-button>
      </div>
    </div>

  </div>

  <Footer />
</template>
