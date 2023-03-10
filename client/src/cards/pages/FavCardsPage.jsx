import React from "react";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const FavCardsPage = () => {
  const { user } = useUser();
  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return <div>FavCardsPage</div>;
};

export default FavCardsPage;
