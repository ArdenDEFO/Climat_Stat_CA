import { getPollutionConnection, sql } from "@/utils/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const province = searchParams.get("province");
    const year = searchParams.get("year");

    if (!province || !year) {
      return new Response(JSON.stringify({ error: "Paramètres manquants" }), {
        status: 400,
      });
    }

    const pool = await getPollutionConnection();

    const result = await pool.request()
      .input("ProvinceName", sql.NVarChar, province)
      .input("Year", sql.Int, year)
      .execute("GetMonthlyPollution");

    return new Response(JSON.stringify(result.recordset), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Erreur API Pollution :", error);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), {
      status: 500,
    });
  }
}
