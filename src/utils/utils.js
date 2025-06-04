import { ref } from 'vue';

export function useAnimationTyping() {
    let dynamicText = ref("");
    let index = 0;
    let speed = 0;

    const typing = (intro) => {
        if (index < intro.length) {
            dynamicText.value += intro.charAt(index);
            index++;
            // set random 
            speed = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
            setTimeout(() => typing(intro), speed);
            // setTimeout(typing, speed);
        } else {
            setTimeout(() => {
                index = intro.length - 1;
                dynamicText.value = "";
                reverseTyping(intro);
            }, 2000);
        }
    };


    const reverseTyping = (intro) => {
        if (index >= 0) {
            dynamicText.value = intro.slice(0, index);
            index--;
            // set random
            speed = Math.floor(Math.random() * (80 - 50 + 1)) + 50;
            setTimeout(() => reverseTyping(intro), speed);
        } else {
            index = 0; // reset
            setTimeout(() => typing(intro), 2000); // tunggu 2detik
        }
    }

    return { dynamicText, typing };
}
