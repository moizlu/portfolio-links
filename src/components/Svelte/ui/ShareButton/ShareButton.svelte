<script lang="ts">
    import Modal from "../Modal/Modal.svelte";
    import CopyButton from "../CopyButton/CopyButton.svelte";

    interface Props {
        shareButtonUrl: string;
        alt: string;
        size?: number;
    }
    const { shareButtonUrl, alt, size = 50 }: Props = $props();

    let isModalOpen: boolean = $state(false);

    const onclick = () => {
        isModalOpen = true;
    };
</script>

<button class="bg-[#474747] rounded-full
            transition-all duration-500 active:bg-gray-200
            shadow-gray-800 shadow-md
            m-2 p-2
            "
        {onclick}
>
    <img src={shareButtonUrl} {alt} width={size} height={size} />
</button>

<Modal bind:isOpen={isModalOpen}>
    <div class="flex flex-col items-center justify-center
                p-5
                max-sm:scale-75
                rounded-2xl
                shadow-black shadow-md
                bg-[#474747]
    ">
        <img src="/home-qr.svg" alt="QRcode">
        <div class="flex items-center justify-center m-5">
            <p class="text-3xl">https://moiz.lu/</p>
            <CopyButton url="https://moiz.lu" size={25} />
        </div>
    </div>
</Modal>
