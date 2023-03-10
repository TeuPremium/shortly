import { db } from "../../config/database/databaseConnection.js";


export default async function(req, res){
    try {
        const {shortUrl} = req.params;

        const redirectTo = await db.query(`SELECT * FROM "shortenUrls" WHERE "shortUrl" = $1`, [shortUrl])

        if (!redirectTo.rowCount){
            return res.sendStatus(404)
        }

        await db.query('UPDATE "shortenUrls" SET "visitCount" = $1 WHERE "shortUrl" = $2;', [redirectTo.rows[0].visitCount + 1, shortUrl])
        

        
        return res.redirect(302, redirectTo.rows[0].url)
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}