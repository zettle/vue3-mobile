export default function (url: string): Promise<null> {
    return new Promise(resolve => {
        const script = window.document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        script.async = true;
        script.onload = function () {
            resolve();
        };
        window.document.head.appendChild(script);
    });
}
