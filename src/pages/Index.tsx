import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileShell from "@/components/MobileShell";
import OnboardingScreen from "@/components/screens/OnboardingScreen";
import LoginScreen from "@/components/screens/LoginScreen";
import BucketListScreen from "@/components/screens/BucketListScreen";
import CarnetScreen from "@/components/screens/CarnetScreen";
import HomeMapScreen from "@/components/screens/HomeMapScreen";
import PlaceDetailScreen from "@/components/screens/PlaceDetailScreen";
import CheckInScreen from "@/components/screens/CheckInScreen";
import HiddenGemScreen from "@/components/screens/HiddenGemScreen";
import ProfileScreen from "@/components/screens/ProfileScreen";
import PrintedCarnetScreen from "@/components/screens/PrintedCarnetScreen";
import TicketScreen from "@/components/screens/TicketScreen";
import LeaderboardScreen from "@/components/screens/LeaderboardScreen";
import TeamFeedScreen from "@/components/screens/TeamFeedScreen";
import PremiumScreen from "@/components/screens/PremiumScreen";
import NotificationsScreen from "@/components/screens/NotificationsScreen";

type Screen =
  | "onboarding"
  | "login"
  | "bucketlist"
  | "carnet"
  | "home"
  | "placeDetail"
  | "checkin"
  | "hiddenGem"
  | "profile"
  | "printedCarnet"
  | "ticket"
  | "leaderboard"
  | "teamFeed"
  | "premium"
  | "notifications";

type Tab = "carnet" | "carte" | "equipe" | "profil";

const pageVariants = {
  initial: { opacity: 0, x: 60, rotateY: -8 },
  animate: { opacity: 1, x: 0, rotateY: 0 },
  exit: { opacity: 0, x: -60, rotateY: 8 },
};

const pageTransition = {
  type: "tween" as const,
  ease: [0.4, 0, 0.2, 1],
  duration: 0.35,
};

const Index = () => {
  const [screen, setScreen] = useState<Screen>("onboarding");
  const [activeTab, setActiveTab] = useState<Tab>("carte");

  const showNav = ["home", "leaderboard", "profile"].includes(screen);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    if (tab === "carnet") setScreen("home");
    if (tab === "carte") setScreen("home");
    if (tab === "equipe") setScreen("leaderboard");
    if (tab === "profil") setScreen("profile");
  };

  const renderScreen = () => {
    switch (screen) {
      case "onboarding":
        return <OnboardingScreen onGetStarted={() => setScreen("bucketlist")} onLogin={() => setScreen("login")} />;
      case "login":
        return <LoginScreen onLogin={() => setScreen("bucketlist")} onBack={() => setScreen("onboarding")} />;
      case "bucketlist":
        return <BucketListScreen onViewCarnet={() => setScreen("carnet")} />;
      case "carnet":
        return <CarnetScreen onStartVoyage={() => { setScreen("home"); setActiveTab("carte"); }} />;
      case "home":
        return <HomeMapScreen onSelectPlace={() => setScreen("placeDetail")} />;
      case "placeDetail":
        return <PlaceDetailScreen onBack={() => setScreen("home")} onCheckIn={() => setScreen("checkin")} />;
      case "checkin":
        return <CheckInScreen onContinue={() => setScreen("hiddenGem")} />;
      case "hiddenGem":
        return <HiddenGemScreen onContinue={() => { setScreen("home"); setActiveTab("carte"); }} />;
      case "profile":
        return <ProfileScreen onPrintCarnet={() => setScreen("printedCarnet")} onPremium={() => setScreen("premium")} onNotifications={() => setScreen("notifications")} />;
      case "printedCarnet":
        return <PrintedCarnetScreen onBack={() => setScreen("profile")} />;
      case "ticket":
        return <TicketScreen onBack={() => setScreen("placeDetail")} />;
      case "leaderboard":
        return <LeaderboardScreen />;
      case "teamFeed":
        return <TeamFeedScreen onBack={() => setScreen("leaderboard")} />;
      case "premium":
        return <PremiumScreen onBack={() => setScreen("profile")} />;
      case "notifications":
        return <NotificationsScreen onBack={() => setScreen("profile")} />;
      default:
        return null;
    }
  };

  return (
    <MobileShell activeTab={activeTab} onTabChange={handleTabChange} hideNav={!showNav}>
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          style={{ perspective: 1200 }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </MobileShell>
  );
};

export default Index;
