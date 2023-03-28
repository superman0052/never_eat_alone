import { Pool } from 'pg';
import { Cuisine, EventCardSummary, PriceRange
} from '../../../../client/library/source/definitions';

/** SocialMediaImage related database manipulations class. */
export class DiningEventDatabase {
  /** @param pool - The pool connection to the postgres database. */
  constructor(pool: Pool) {
    this.pool = pool;
  }

  public loadHomePageDiningEventCardSummaries = async (userId: number): Promise<
      EventCardSummary[]> => {
    const result = await this.pool.query(
      'SELECT re.id AS re_id, de.id AS de_id, de.title AS de_title, \
      de.start_at, de.end_at, de.cover_image_src, re.name AS re_name, \
      re.price_range AS re_price_range, de.total_capacity, de.color_code AS \
      de_color_code FROM dining_events AS de JOIN restaurants AS re ON \
      de.restaurant_id = re.id order by start_at DESC limit $1', [7]);
    if (!result || result.rows.length === 0) {
      return [];
    }
    const events: EventCardSummary[] = [];
    for (const row of result.rows) {
      let tempResult = await this.pool.query('SELECT cu.* FROM cuisines AS cu \
        JOIN restaurant_cuisines AS re ON re.cuisine_id = cu.id WHERE \
        re.restaurant_id = $1 limit 10', [row.re_id]);
      const cuisines = tempResult.rows.map(row => {
        return new Cuisine(parseInt(row.id), row.label, row.color_code);
      });
      let numberOfAttendees = 0;
      let numberOfSeatsAvailable = parseInt(row.total_capacity);
      tempResult = await this.pool.query(
        "SELECT COUNT (event_id) AS total FROM attendees WHERE event_id = $1 \
        AND status = 'GOING'", [row.de_id]);
      if (tempResult.rows && tempResult.rows.length !== 0) {
        numberOfAttendees = parseInt(tempResult.rows[0].total);
        numberOfSeatsAvailable -= parseInt(tempResult.rows[0].total);
      }
      let isAttending: boolean = false;
      tempResult = await this.pool.query("SELECT * FROM attendees WHERE \
        event_id = $1 AND user_id = $2 AND status = 'GOING'", [row.de_id,
        userId]);
      if (tempResult.rows && tempResult.rows.length !== 0) {
        isAttending = true;
      }
      const event = new EventCardSummary(parseInt(row.de_id), row.de_title,
        new Date(Date.parse(row.start_at)), new Date(Date.parse(row.end_at)),
        row.re_name, PriceRange[row.re_price_range as keyof typeof PriceRange],
        cuisines, row.cover_image_src, numberOfAttendees,
        numberOfSeatsAvailable, isAttending, row.de_color_code);
      events.push(event);
    }
    return events;
  }

  /** The postgress pool connection. */
  private pool: Pool;
}