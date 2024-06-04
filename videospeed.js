// 保存するときはtxt形式で保存すればコピって使える
function getCurrentSpeed() {
    return document.querySelector('video').playbackRate;
}

function adjustSpeed(change) {
    const currentSpeed = getCurrentSpeed();
    const newSpeed = currentSpeed + change;
    document.querySelector('video').playbackRate = newSpeed;
    console.log(`現在の再生速度：${newSpeed}`); 
}

document.addEventListener('keydown', (event) => {
    if (event.key === '+') { // +キーが押されたとき、再生速度を上げる
        adjustSpeed(0.1); // +0.1
    } else if (event.key === '-') { // -キーが押されたとき、再生速度を落とす
        adjustSpeed(-0.1); // -0.1
    }
});

document.querySelector('video').addEventListener('ratechange', () => {
    const currentSpeed = getCurrentSpeed();
    console.log(`現在の再生速度：${currentSpeed}`); 
});

