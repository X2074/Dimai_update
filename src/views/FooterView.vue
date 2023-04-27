<template>
    <footer>
        <div class="head">
            <div class="brands">
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
        <div class="foot">
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 40 40" fill="none"><g opacity="1" transform="translate(0 0)  rotate(0 20 20)"><g opacity="1" transform="translate(0 0)  rotate(0 20 20)"><path  id="路径 1" style="stroke:#BDF24B; stroke-width:4; stroke-opacity:1; stroke-dasharray:0 0" transform="translate(0 0)  rotate(0 20 20)" d="M5.8,5.9L0,20.05L5.85,34.15L20,40L34.1,34.2L40,20.05L34.1,5.85L20,0L5.8,5.9Z " /><path id="矩形 2" fill-rule="evenodd" style="fill:#B9F23F" transform="translate(31.575623332210704 31.44420163726813)  rotate(37.357793781167175 3.25 2.25)" opacity="1" d="M0.72,4.5L5.78,4.5C6.18,4.5 6.5,4.18 6.5,3.78L6.5,0.72C6.5,0.32 6.18,0 5.78,0L0.72,0C0.32,0 0,0.32 0,0.72L0,3.78C0,3.97 0.08,4.15 0.21,4.29C0.35,4.42 0.53,4.5 0.72,4.5Z " /><path  id="路径 1" style="stroke:#B0E048; stroke-width:4; stroke-opacity:1; stroke-dasharray:0 0" transform="translate(1.9000000000000405 1.9000000000000405)  rotate(0 18 18)" d="M5.22,5.31L0,18.05L5.27,30.74L18,36L30.69,30.78L36,18.04L30.69,5.27L18,0L5.22,5.31Z " /><path  id="路径 1" style="stroke:#A5D63F; stroke-width:3; stroke-opacity:1; stroke-dasharray:0 0" transform="translate(3.89999999999999 3.8500000000001617)  rotate(0 16 16)" d="M4.64,4.72L0,16.04L4.68,27.32L16,32L27.28,27.36L32,16.04L27.28,4.68L16,0L4.64,4.72Z " /><path  id="路径 1" style="stroke:#A2C752; stroke-width:2; stroke-opacity:1; stroke-dasharray:0 0" transform="translate(5.800000000000031 5.849999999999858)  rotate(0 14 14)" d="M4.06,4.13L0,14.04L4.1,23.91L14,28L23.87,23.94L28,14.04L23.87,4.1L14,0L4.06,4.13Z " /></g></g></svg>
                <p>@2023 Dimai.io, Inc.</p>
            </div>
            <div class="terms">
                <a href="">Privacy Policy</a>
                <a href="">Terms of Service</a>
            </div>
        </div>
        
    </footer>
</template>

<script setup>

</script>

<style scoped>
* {
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            font-weight: 600;
        }
        footer {
            width: 1024px;
            height: 104px;
            margin: 0 auto;
            opacity: 1;
            
            left: 0px;
            top: 117px;
        }
        footer .foot {
            display: flex;
            justify-content: space-between;
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(128, 128, 128, 1);
            align-items: center;
        }
        footer > .foot > .logo {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            width: 22%;
            align-items: center;
        }
        footer > .foot > .terms {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 23%;
        }
        footer > .foot > .terms > a {
            text-decoration: none;
            color: #000;
        }
        footer > .head {
            background-color: gray;
            padding: 5px;
            height: 50px;
            align-items: end;
        }
        footer > .head > .brands {
            display: flex;
            justify-content: end;
            padding-right: 10px;
        }
        footer > .head > .brands > .twitter {
            position: relative;
            top: 10px;
        }
        footer > .head > .brands > .telegram {
            position: relative;
            left: -8px;
        }
        footer > .head > .brands > .github {
            position: relative;
            left: -24px;
        }
        footer > .head > .brands > .medium {
            position: relative;
            left: -32px;
            top: 10px;
        }
        footer > .head > .brands > .discord {
            position: relative;
            top: 10px;
            left: -16px;
        }
</style>