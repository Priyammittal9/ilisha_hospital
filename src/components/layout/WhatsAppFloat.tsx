
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "Hello! I would like to know more about your services.";
    // const whatsappUrl = `https://wa.me/911204567890?text=${encodeURIComponent(message)}`;
    // window.open(whatsappUrl, "_blank");
  };

  return (
    // <div className="fixed bottom-6 right-6 z-50">
    //   {isOpen && (
    //     <div className="mb-4 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-fade-in">
    //       <div className="flex justify-between items-start mb-2">
    //         <h4 className="font-semibold text-green-600">WhatsApp Support</h4>
    //         <Button
    //           variant="ghost"
    //           size="sm"
    //           onClick={() => setIsOpen(false)}
    //           className="h-6 w-6 p-0"
    //         >
    //           <X className="h-4 w-4" />
    //         </Button>
    //       </div>
    //       <p className="text-sm text-gray-600 mb-3">
    //         Hi! How can we help you today? Click below to start a conversation.
    //       </p>
    //       <Button
    //         onClick={handleWhatsAppClick}
    //         className="w-full bg-green-500 hover:bg-green-600 text-white"
    //       >
    //         Start Chat
    //       </Button>
    //     </div>
    //   )}
      
    //   <Button
    //     onClick={() => setIsOpen(!isOpen)}
    //     className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    //   >
    //     <MessageCircle className="h-6 w-6" />
    //   </Button>
    // </div>
    <></>
  );
};
