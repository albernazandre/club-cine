// import Home from "./src/pages/home/Home";
// import Search from "./src/pages/search/Search";
// import Voucher from "./src/pages/voucher/Voucher";
// import Heart from "./src/pages/heart/Heart";
// import BuyHistory from "./src/pages/history/BuyHistory";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/routes/routes";


export default function App() {
    return (
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
      // <Home />
  );
}
