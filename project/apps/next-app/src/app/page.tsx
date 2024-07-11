"use client"
import { withPrivateRoute } from "../contexts/authorization/with-private-router";

function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			Olá Mundo
		</main>
	);
}

export default withPrivateRoute(Home)
