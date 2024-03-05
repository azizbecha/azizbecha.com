"use client"
import toast from "react-hot-toast"
import { FaLink } from "react-icons/fa"
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon } from "react-share"

interface Props {
    url: string
}

const SharePost = ({ url }: Props) => {
    return (
        <div className="pt-2 border-t-2 border-t-white">
            <p className="font-ubuntu font-light">You enjoyed reading this article ? Share it with your friends.</p>
            <p className="mb-2 font-ubuntu font-light">Sharing is caring ✨</p>
            
            <div className="flex gap-3">
                <div
                    onClick={() => {
                        toast.promise(navigator.clipboard.writeText(url), {
                            success: 'Link copied to clipboard',
                            error: "An error occured",
                            loading: null
                        });
                    }}
                    className="bg-main rounded-full w-9 h-9 text-center flex items-center justify-center">
                    <FaLink className="text-white mx-auto" size={18} />
                </div>

                <FacebookShareButton
                    children={<FacebookIcon size={35} round={true} />}
                    url={url}
                />

                <LinkedinShareButton
                    children={<LinkedinIcon size={35} round={true} />}
                    url={url}
                />

                <TelegramShareButton
                    children={<TelegramIcon size={35} round={true} />}
                    url={url}
                />

                <TwitterShareButton
                    children={<XIcon size={35} round={true} />}
                    url={url}
                />

                <WhatsappShareButton
                    children={<WhatsappIcon size={35} round={true} />}
                    url={url}
                />

                <EmailShareButton
                    children={<EmailIcon size={35} round={true} />}
                    url={url}
                />
            </div>
        </div>
    )
}

export default SharePost