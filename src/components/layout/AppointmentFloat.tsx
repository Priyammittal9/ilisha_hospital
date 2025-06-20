
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const AppointmentFloat = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Link to="/appointment">
        <Button className="bg-medical-teal hover:bg-medical-teal/90 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <Calendar className="h-6 w-6" />
        </Button>
      </Link>
    </div>
  );
};
