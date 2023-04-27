<template>
    <footer class="my-container p-3 mt-32">
        <div class="mb-5">
            <div class="flex justify-end brands">
                <span class="twitter">
                    <img src="@/assets/Twitter.png" width="40px" alt="Discord"/>
                </span>
                <span class="telegram">
                    <img src="@/assets/Telegram.png" width="40px" alt="Telegram"/>
                </span>
                <span class="discord">
                    <img src="@/assets/Discord.png" width="40px" alt="Discord" />
                </span>
                <span class="github">
                    <img src="@/assets/Github.png" width="40px" alt="Github" />
                </span>
                <span class="medium">
                    <img src="@/assets/Medium.png" width="40px" alt="Medium" />
                </span>
            </div>
        </div>
        <div class="md:flex justify-between p-3 border-t-2 border-black">
            <div class="flex mb-5 md:mb-0 w-full md:w-1/2">
              <img src="@/assets/logo2.jpeg" alt="" class="w-1/12" />
                <p class="ml-12">@2023 Dimai.io, Inc.</p>
            </div>
            <div class="text-right mr-1 md:mr-10">
                <a href="#" class="mr-3">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
        </div>
        
    </footer>
</template>

<script setup>

</script>

<style scoped>


        .brands > .twitter {
            position: relative;
            top: 10px;
        }
        .brands > .telegram {
            position: relative;
            left: -8px;
        }
        .brands > .github {
            position: relative;
            left: -24px;
        }
        .brands > .medium {
            position: relative;
            left: -32px;
            top: 10px;
        }
        .brands > .discord {
            position: relative;
            top: 10px;
            left: -16px;
        }
</style>