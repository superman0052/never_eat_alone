import * as NeverEatAlone from 'never_eat_alone';
import { DemoDeactivateAccountSurveyModel } from
  './demo_deactivate_account_survey_model';
import { DemoDeletedAccountSurveyModel } from
  './demo_deleted_account_survey_model';
import { DemoDiningEventPageModel } from './demo_dining_event_page_model';
import { DemoEditProfilePageModel } from './demo_edit_profile_page_model';
import { DemoForgotPasswordPageModel } from
  './demo_forogot_password_page_model';
import { DemoJoinModel } from './demo_join_model';
import { DemoLogInModel } from './demo_login_model';
import { DemoSettingsPageModel } from './demo_settings_page_model';
import { DemoSignUpPageModel } from './demo_sign_up_page_model';

/** Implements the ApplicationModel for demo purposes. */
export class DemoApplicationModel extends NeverEatAlone.ApplicationModel {
  public async load(): Promise<void> {
    const userArthur = new NeverEatAlone.User(2, 'Arthur', 'arthur@gmail.com',
      'arthur123', NeverEatAlone.UserStatus.ACTIVE, new Date(2022, 10, 11, 1, 5,
      35));
    const arthurProfileImage = new NeverEatAlone.UserProfileImage(2,
      'resources/images/profileguy3.jpeg');
    this._account = userArthur;
    this._accountProfileImage = arthurProfileImage;
    const imageListEmpty: NeverEatAlone.SocialMediaImage[] = [];
    const imageListSample: NeverEatAlone.SocialMediaImage[] = [
      new NeverEatAlone.SocialMediaImage(1, 'resources/images/2.jpg'),
      new NeverEatAlone.SocialMediaImage(2, 'resources/images/3.jpg'),
      new NeverEatAlone.SocialMediaImage(3, 'resources/images/4.jpg'),
      new NeverEatAlone.SocialMediaImage(4, 'resources/images/5.jpg'),
      new NeverEatAlone.SocialMediaImage(5, 'resources/images/6.jpg'),
      new NeverEatAlone.SocialMediaImage(6, 'resources/images/7.jpg'),
      new NeverEatAlone.SocialMediaImage(7, 'resources/images/8.jpg'),
      new NeverEatAlone.SocialMediaImage(8, 'resources/images/9.jpg'),
      new NeverEatAlone.SocialMediaImage(9, 'resources/images/10.jpg'),
      new NeverEatAlone.SocialMediaImage(10, 'resources/images/11.jpg'),
      new NeverEatAlone.SocialMediaImage(11, 'resources/images/12.jpg'),
      new NeverEatAlone.SocialMediaImage(12, 'resources/images/13.jpg')
    ];
    const eventListEmpty: NeverEatAlone.EventCardSummary[] = [];
    const japaneseCuisine = new NeverEatAlone.Cuisine(1, 'Japanese', '#F9C638');
    const omakaseCuisine = new NeverEatAlone.Cuisine(2, 'Omakase', '#E1630D');
    const italianCuisine = new NeverEatAlone.Cuisine(3, 'Italian', '#B2DFED');
    const canadianCuisine = new NeverEatAlone.Cuisine(4, 'Canadian', '#8EA142');
    const modernCuisine = new NeverEatAlone.Cuisine(5, 'Modern', '#DA78A5');
    const steakhouseCuisine = new NeverEatAlone.Cuisine(6, 'Steakhouse',
      '#FFF2FE');
    const seafoodCuisine = new NeverEatAlone.Cuisine(7, 'Seafood', '#507286');
    const middleEasternCuisine = new NeverEatAlone.Cuisine(8, 'Middle eastern',
      '#B3A870');
    const frenchCuisine = new NeverEatAlone.Cuisine(9, 'French', '#FFBCBC');
    const traditionalCuisine = new NeverEatAlone.Cuisine(10, 'Traditional',
      '#E5FFD8');
    const bbqCuisine = new NeverEatAlone.Cuisine(11, 'BBQ', '#B27A49');
    const breweryCuisine = new NeverEatAlone.Cuisine(12, 'Brewery', '#C4AA90');
    const persianCuisine = new NeverEatAlone.Cuisine(13, 'Persian', '#FCE1D8');
    const grillCuisine = new NeverEatAlone.Cuisine(14, 'Grill', '#A8A160');
    const chineseCuisine = new NeverEatAlone.Cuisine(15, 'Chinese', '#957DAD');
    const fusionCuisine = new NeverEatAlone.Cuisine(16, 'Fusion', '#FFFED4');
    const eventCardSummary1 = new NeverEatAlone.EventCardSummary(1,
      'A night to remmeber at the best sushi restaurant in town!', new Date(
      2023, 8, 12, 19, 0, 0), new Date(2023, 8, 13, 1, 0, 0),
      'Yukashi Japanese Restaurant', NeverEatAlone.PriceRange.VERY_EXPENSIVE,
      [japaneseCuisine, omakaseCuisine], 'resources/images/3.jpg', 6, 6, false,
      '#E1630D');
    const eventCardSummary2 = new NeverEatAlone.EventCardSummary(2,
      'The best italian restaurant in town!', new Date(2023, 8, 22, 19, 30, 0),
      new Date(2023, 8, 22, 22, 30, 0), 'Piano Piano Restaurant',
      NeverEatAlone.PriceRange.EXPENSIVE, [italianCuisine],
      'resources/images/4.jpg', 4, 6, false, '#B2DFED');
    const eventCardSummary3 = new NeverEatAlone.EventCardSummary(3,
      "Let's go to Yukashi", new Date(2023, 8, 12, 19, 0, 0), new Date(2023, 8,
      13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [japaneseCuisine,
      omakaseCuisine], 'resources/images/3.jpg', 6, 6, false, '#F9C638');
    const eventCardSummary4 = new NeverEatAlone.EventCardSummary(4,
      'Who said Duck?!', new Date(2023, 9, 12, 19, 0, 0), new Date(2023, 9, 13,
      1, 0, 0), 'Ration Restaurant', NeverEatAlone.PriceRange.VERY_EXPENSIVE,
      [canadianCuisine, modernCuisine], 'resources/images/4.jpg', 6, 6, false,
      '#DA78A5');
    const eventCardSummary5 = new NeverEatAlone.EventCardSummary(5,
      'Steak night', new Date(2023, 9, 15, 19, 0, 0), new Date(2023, 9, 16, 1,
      0, 0), "Hy's Steakhouse and bar", NeverEatAlone.PriceRange.VERY_EXPENSIVE,
      [steakhouseCuisine, seafoodCuisine], 'resources/images/5.jpg', 6, 6,
      false, '#AC4519');
    const eventCardSummary6 = new NeverEatAlone.EventCardSummary(6,
      "Let's try the tasting menu at Azhar.", new Date(2023, 10, 12, 19, 0, 0),
      new Date(2023, 10, 13, 1, 0, 0), 'Azhar Restaurant',
      NeverEatAlone.PriceRange.EXPENSIVE, [middleEasternCuisine, modernCuisine],
      'resources/images/6.jpg', 6, 6, false, '#B3A870');
    const eventCardSummary7 = new NeverEatAlone.EventCardSummary(7,
      'Calling all the french food lovers', new Date(2023, 10, 20, 19, 0, 0),
      new Date(2023, 10, 21, 1, 0, 0), 'Le Select Bistro',
      NeverEatAlone.PriceRange.MODERATELY_PRICED, [frenchCuisine,
      traditionalCuisine], 'resources/images/7.jpg', 6, 6, false, '#6A8716');
    const eventCardSummary8 = new NeverEatAlone.EventCardSummary(8,
      'Shakshouka for life!', new Date(2023, 10, 12, 11, 30, 0), new Date(2023,
      10, 13, 1, 0, 0), 'Amal Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [middleEasternCuisine,
      modernCuisine], 'resources/images/8.jpg', 6, 6, false, '#DA78A5');
    const eventCardSummary9 = new NeverEatAlone.EventCardSummary(9,
      'Exceptional view and drinks', new Date(2023, 11, 12, 19, 0, 0), new Date(
      2022, 11, 13, 1, 0, 0), 'Canoe', NeverEatAlone.PriceRange.EXPENSIVE, [
      modernCuisine, canadianCuisine], 'resources/images/9.jpg', 6, 6, false,
      '#8EA142');
    const eventCardSummary10 = new NeverEatAlone.EventCardSummary(10,
      'Celebrating Oktoberfest', new Date(2023, 12, 12, 19, 0, 0), new Date(
      2023, 12, 13, 1, 0, 0), 'Liberty Commons Smokehouse',
      NeverEatAlone.PriceRange.INEXPENSIVE, [bbqCuisine, breweryCuisine],
      'resources/images/10.jpg', 6, 6, false, '#B27A49');
    const eventCardSummary11 = new NeverEatAlone.EventCardSummary(11,
      'Persian grill at its best', new Date(2022, 6, 12, 19, 0, 0), new Date(
      2022, 6, 13, 1, 0, 0), 'Darbar Persian Grill',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [persianCuisine, grillCuisine],
      'resources/images/11.jpg', 6, 6, false, '#FCE1D8');
    const eventCardSummary12 = new NeverEatAlone.EventCardSummary(12,
      'Must try fusion food', new Date(2023, 10, 1, 19, 0, 0), new Date(2023,
      10, 2, 1, 0, 0), 'R&D Restaurant', NeverEatAlone.PriceRange.EXPENSIVE, [
      chineseCuisine, modernCuisine, fusionCuisine], 'resources/images/12.jpg',
      6, 6, false, '#957DAD');
    const eventCardSummary13 = new NeverEatAlone.EventCardSummary(13,
      "Let's try the tasting menu at Azhar.", new Date(2023, 11, 10, 19, 0, 0),
      new Date(2023, 11, 11, 1, 0, 0), 'Azhar Restaurant',
      NeverEatAlone.PriceRange.EXPENSIVE, [middleEasternCuisine, modernCuisine],
      'resources/images/6.jpg', 6, 6, false, '#B3A870');
    /** Past event List examples */
    const eventCardSummary14 = new NeverEatAlone.EventCardSummary(14,
      'Must try fusion food', new Date(2023, 6, 1, 19, 0, 0), new Date(2023, 6,
      2, 1, 0, 0), 'R&D Restaurant', NeverEatAlone.PriceRange.EXPENSIVE, [
      chineseCuisine, modernCuisine, fusionCuisine], 'resources/images/12.jpg',
      6, 6, false, '#957DAD');
    const eventCardSummary15 = new NeverEatAlone.EventCardSummary(15,
      'A night to remmeber at the best sushi restaurant in town!', new Date(
      2023, 5, 12, 19, 0, 0), new Date(2023, 5, 13, 1, 0, 0),
      'Yukashi Japanese Restaurant', NeverEatAlone.PriceRange.VERY_EXPENSIVE,
      [japaneseCuisine, omakaseCuisine], 'resources/images/3.jpg', 6, 6, false,
      '#E1630D');
    const eventCardSummary16 = new NeverEatAlone.EventCardSummary(16,
      'The best italian restaurant in town!', new Date(2023, 5, 22, 19, 30, 0),
      new Date(2023, 5, 22, 22, 30, 0), 'Piano Piano Restaurant',
      NeverEatAlone.PriceRange.EXPENSIVE, [italianCuisine],
      'resources/images/4.jpg', 4, 6, false, '#B2DFED');
    const eventCardSummary17 = new NeverEatAlone.EventCardSummary(17,
      "Let's go to Yukashi", new Date(2023, 4, 12, 19, 0, 0), new Date(2023, 4,
      13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [japaneseCuisine,
      omakaseCuisine], 'resources/images/3.jpg', 6, 6, false, '#F9C638');
    const eventCardSummary18 = new NeverEatAlone.EventCardSummary(18,
      'Who said Duck?!', new Date(2023, 1, 12, 19, 0, 0), new Date(2023, 1, 13,
      1, 0, 0), 'Ration Restaurant', NeverEatAlone.PriceRange.VERY_EXPENSIVE,
      [canadianCuisine, modernCuisine], 'resources/images/4.jpg', 6, 6, false,
      '#DA78A5');
    const upcomingEventListSample: NeverEatAlone.EventCardSummary[] = [
      eventCardSummary1, eventCardSummary2, eventCardSummary3,
      eventCardSummary4, eventCardSummary5, eventCardSummary6,
      eventCardSummary7, eventCardSummary8, eventCardSummary9,
      eventCardSummary10, eventCardSummary11, eventCardSummary12];
    const pastEventListSample: NeverEatAlone.EventCardSummary[] = [
      eventCardSummary14, eventCardSummary15, eventCardSummary16,
      eventCardSummary17, eventCardSummary18];
    const eventTagListEmpty: NeverEatAlone.EventTag[] = [];
    const eventTagListSample: NeverEatAlone.EventTag[] = [
      new NeverEatAlone.EventTag(1, 'A night to remmeber at the best sushi \
        restaurant in town!', '#E1630D'),
      new NeverEatAlone.EventTag(2, 'The best italian restaurant in town!',
        '#B2DFED'),
      new NeverEatAlone.EventTag(3, "Let's go to Yukashi", '#F9C638'),
      new NeverEatAlone.EventTag(4, 'Who said Duck?!', '#DA78A5'),
      new NeverEatAlone.EventTag(7, 'Calling all the french food lovers',
        '#6A8716'),
      new NeverEatAlone.EventTag(9, 'Exceptional view and drinks', '#8EA142'),
      new NeverEatAlone.EventTag(10, 'Celebrating Oktoberfest', '#B27A49'),
      new NeverEatAlone.EventTag(12 , 'Must try fusion food', '#957DAD')
    ];
    const userFutureEventListEmpty: NeverEatAlone.EventCardSummary[] = [];
    const userFutureEventListSample: NeverEatAlone.EventCardSummary[] = [
      eventCardSummary5, eventCardSummary6, eventCardSummary7];
    const totalEventsThisMonth: number = 10;
    const homePageModelGuestUser = new NeverEatAlone.LocalHomePageModel(
      imageListSample, upcomingEventListSample, pastEventListSample,
      eventTagListEmpty, userFutureEventListEmpty, totalEventsThisMonth);
    this._homePageModel = homePageModelGuestUser;
    const userEmma = new NeverEatAlone.User(1, 'Emma', 'emma@gmail.com', 'emma',
      NeverEatAlone.UserStatus.ACTIVE, new Date(2022, 11, 1, 10, 20, 30));
    const emmaProfileImage = new NeverEatAlone.UserProfileImage(1,
      'resources/images/profile5.jpeg');
    const attendeeList1: NeverEatAlone.Attendee[] = [
      new NeverEatAlone.Attendee(userEmma.id, 1, userEmma.name, 0,
        NeverEatAlone.AttendeeStatus.GOING, emmaProfileImage.src, new Date()),
      new NeverEatAlone.Attendee(userArthur.id, 1, userArthur.name, 0,
        NeverEatAlone.AttendeeStatus.GOING, arthurProfileImage.src, new Date()),
      new NeverEatAlone.Attendee(3, 1, 'tofu55', 0,
        NeverEatAlone.AttendeeStatus.GOING, 'resources/images/10.jpg',
        new Date()),
      new NeverEatAlone.Attendee(4, 1, 'MarkTheFoodie', 0,
        NeverEatAlone.AttendeeStatus.GOING, 'resources/images/profileguy3.jpeg',
        new Date()),
      new NeverEatAlone.Attendee(5, 1, 'Riley', 0,
        NeverEatAlone.AttendeeStatus.GOING, 'resources/images/profile2.jpeg',
        new Date()),
      new NeverEatAlone.Attendee(6, 1, 'Lili', 0,
        NeverEatAlone.AttendeeStatus.GOING, 'resources/images/profile3.jpeg',
        new Date()),
      new NeverEatAlone.Attendee(7, 1, 'Elena', 0,
        NeverEatAlone.AttendeeStatus.NOT_GOING,
        'resources/images/profile4.jpeg', new Date()),
      new NeverEatAlone.Attendee(8, 1, 'John', 0,
        NeverEatAlone.AttendeeStatus.GOING, 'resources/images/profileguy4.jpeg',
        new Date()),
      new NeverEatAlone.Attendee(9, 1, 'Jess', 2,
        NeverEatAlone.AttendeeStatus.NOT_GOING,
        'resources/images/profile5.jpeg', new Date()),
      new NeverEatAlone.Attendee(10, 1, 'Arthur', 1,
        NeverEatAlone.AttendeeStatus.GOING, 'resources/images/profileguy5.jpeg',
        new Date())
    ];
    const attendeeList2: NeverEatAlone.Attendee[] = [
      new NeverEatAlone.Attendee(userEmma.id, 1, userEmma.name, 0,
        NeverEatAlone.AttendeeStatus.NOT_GOING, emmaProfileImage.src,
        new Date()),
      new NeverEatAlone.Attendee(3, 1, 'tofu55', 0,
        NeverEatAlone.AttendeeStatus.GOING, 'resources/images/10.jpg',
        new Date()),
      new NeverEatAlone.Attendee(4, 1, 'MarkTheFoodie', 0,
        NeverEatAlone.AttendeeStatus.GOING, 'resources/images/profileguy3.jpeg',
        new Date()),
      new NeverEatAlone.Attendee(7, 1, 'Elena', 0,
        NeverEatAlone.AttendeeStatus.NOT_GOING,
        'resources/images/profile4.jpeg', new Date()),
      new NeverEatAlone.Attendee(8, 1, 'John', 0,
        NeverEatAlone.AttendeeStatus.GOING, 'resources/images/profileguy4.jpeg',
        new Date()),
      new NeverEatAlone.Attendee(9, 1, 'Jess', 2,
        NeverEatAlone.AttendeeStatus.NOT_GOING,
        'resources/images/profile5.jpeg', new Date()),
      new NeverEatAlone.Attendee(10, 1, 'Arthur', 1,
        NeverEatAlone.AttendeeStatus.GOING, 'resources/images/profileguy5.jpeg',
        new Date())
    ];
    const attendeeList7: NeverEatAlone.Attendee[] = [];

    /** Dining event model 1 */
    const diningEventModel1Description = "Elevate your favourite Kibo Sushi \
    experience with OMAKASE by Kibo (18 courses). \
    \
    Indulge yourself in the delicacy of modern style Omakase performed by our \
    team. In addition to maintaining a Japanese traditional Omakase with \
    carefully chosen seafood by our Executive Chef, we add some spirits of \
    Kibo based on the freshest seasonal ingredients. You will be entertained \
    by beautiful presentations, exquisite service, and heavenly taste. \
    \
    Dinner Menu: \
    \
    https://www.kiboomakase.com/";
    const restaurant1 = new NeverEatAlone.Restaurant(1,
      'Yukashi Japanese Restaurant', new Date(), 1, 'One Michelin Star 2022',
      '', '4167869809', NeverEatAlone.PriceRange.VERY_EXPENSIVE, [
      japaneseCuisine, omakaseCuisine], 'yukashi.com');
    const location1 = new NeverEatAlone.Location(1, '643a Mt Pleasant Rd', '',
      'Toronto', 'ON', 'Canada', 'M4S 2M9', 'Midtown');
    const diningEvent1 = new NeverEatAlone.DiningEvent(1, '#E1630D', 15,
      'resources/images/3.jpg', 'A night to remmeber at the best sushi \
      restaurant in town!', restaurant1, NeverEatAlone.DressCode.BLACK_TIE,
      NeverEatAlone.Seating.PRIVATE_ROOM, location1, 'Alexa Perry',
      new Date(2023, 6, 12, 19, 0, 0), new Date(2023, 6, 13, 1, 0, 0),
      attendeeList1, 10, diningEventModel1Description,
      new Date(2023, 6, 12, 19, 0, 0), new Date(2023, 6, 13, 1, 0, 0),
      NeverEatAlone.EventStatus.ACTIVE, NeverEatAlone.EventType.PUBLIC,
      new Date(2023, 6, 12, 19, 0, 0), new Date(Date.now()));
    this._diningEventPageModelMap = new Map();
    const demoDiningEventModel1 = new DemoDiningEventPageModel(diningEvent1);
    this._diningEventPageModelMap.set(1, demoDiningEventModel1);
    /** Dining event model 2 */
    const diningEventModel2Description = "About the restaurant: \
      A collaboration between the Mohyeddin siblings, this family-run Iranian \
      eatery, bar and commissary, is a destination in Toronto’s Queen Street \
      West neighbourhood. For more than a decade, Banu has been serving up the \
      very best of Persian-inspired cocktails, cuisine and culture. \
      \
      Dinner Menu: \
      \
      https://banu.ca/menu";
    const restaurant2 = new NeverEatAlone.Restaurant(2, 'Piano Piano',
      new Date(), 2, 'Piano Piano is managed by a michelin chef from Italy.', '',
      '6756784354', NeverEatAlone.PriceRange.EXPENSIVE, [italianCuisine],
      'pianopiano.com');
    const location2 = new NeverEatAlone.Location(2, '', '', 'Toronto', 'ON',
      'Canada', '', 'Midtown');
    const diningEvent2 = new NeverEatAlone.DiningEvent(2, '#B2DFED', 20.00,
      'resources/images/4.jpg', 'The best italian restaurant in town!',
      restaurant2, NeverEatAlone.DressCode.CASUAL,
      NeverEatAlone.Seating.HIGH_TABLE, location2, 'Alexa Perry',
      new Date(2023, 5, 22, 19, 30, 0), new Date(2023, 6, 13, 0, 30, 0),
      attendeeList2, 12, diningEventModel2Description,
      new Date(2023, 5, 22, 19, 30, 0), new Date(2023, 6, 13, 0, 30, 0),
      NeverEatAlone.EventStatus.ACTIVE, NeverEatAlone.EventType.PUBLIC,
      new Date(2023, 6, 12, 19, 0, 0), new Date(Date.now()));
    const demoDiningEventModel2 = new DemoDiningEventPageModel(diningEvent2);
    this._diningEventPageModelMap.set(2, demoDiningEventModel2);
    /** Dining event model 7 */
    const restaurant7 = new NeverEatAlone.Restaurant(7, 'Le Select Bistro',
      new Date(), 7, `Classic French food & a wine list of over 1,000 bottles, 
      with vintage posters lining the walls.`, 'Go upstairs.', '(416) 626-6262',
      NeverEatAlone.PriceRange.MODERATELY_PRICED, [frenchCuisine,
      traditionalCuisine], 'https://www.leselectbistro.com/');
    const location7 = new NeverEatAlone.Location(7, '432 Wellington St W', '',
      'Toronto', 'ON', 'CA', 'M5V 1E3', 'Financial District');
    const diningEvent7 = new NeverEatAlone.DiningEvent(7, '#6A8716', 5.00,
      'resources/images/7.jpg', 'Calling all the french food lovers',
      restaurant7, NeverEatAlone.DressCode.BUSINESS_CASUAL,
      NeverEatAlone.Seating.STANDARD, location7, 'Sheryl Miller', new Date(
      2023, 7, 12, 19, 0, 0), new Date(2023, 7, 13, 1, 0, 0), attendeeList7, 8,
      'Why not.', new Date(2023, 6, 13, 1, 0, 0), new Date(2023, 7, 12, 18, 0,
      0), NeverEatAlone.EventStatus.ACTIVE, NeverEatAlone.EventType.PUBLIC,
      new Date(), new Date());
    const demoDiningEventModel7 = new DemoDiningEventPageModel(diningEvent7);
    this._diningEventPageModelMap.set(7, demoDiningEventModel7);
    this._inviteAFoodieModel = new NeverEatAlone.LocalInviteAFoodieModel(
      new NeverEatAlone.UserInvitationCode(1, 'AcFTHD$5Dg'));
    this._joinModel = new DemoJoinModel();
    this._partnerWithUsModel = new NeverEatAlone.LocalPartnerWithUsModel();
    this._logInModel = new DemoLogInModel([userEmma, userArthur], [
      emmaProfileImage, arthurProfileImage]);
    this._forgotPasswordPageModel = new DemoForgotPasswordPageModel([userEmma,
      userArthur]);
    const toronto = new NeverEatAlone.CityProvince(1, 'Toronto', 'ON',
      'Canada');
    const vancouver = new NeverEatAlone.CityProvince(2, 'Vancouver', 'BC',
      'Canada');
    const barrie = new NeverEatAlone.CityProvince(3, 'Barrie', 'ON', 'Canada');
    const ottawa = new NeverEatAlone.CityProvince(3, 'Ottawa', 'ON', 'Canada');
    const montreal = new NeverEatAlone.CityProvince(4, 'Montreal', 'QB',
      'Canada');
    const hamilton = new NeverEatAlone.CityProvince(5, 'Hamilton', 'ON',
      'Canada');
    const burlington = new NeverEatAlone.CityProvince(6, 'Burlington', 'ON',
      'Canada');
    const vaughan = new NeverEatAlone.CityProvince(7, 'Vaughan', 'ON',
      'Canada');
    const englishLanguage = new NeverEatAlone.Language(1, 'en', 'English');
    const spanishLanguage = new NeverEatAlone.Language(2, 'es', 'Spanish');
    const mandarinLanguage = new NeverEatAlone.Language(3, 'zh', 'Mandarin');
    const germanLanguage = new NeverEatAlone.Language(4, 'de', 'German');
    const frenchLanguage = new NeverEatAlone.Language(5, 'fr', 'French');
    const farsiLanguage = new NeverEatAlone.Language(6, 'fa', 'Farsi');
    const emmaLanguageList = [englishLanguage];
    const arthurLanguageList = [englishLanguage, frenchLanguage];
    const lucyLanguageList = [mandarinLanguage, englishLanguage,
      spanishLanguage, germanLanguage];
    const emmaFavoriteCuisines = [frenchCuisine, canadianCuisine, modernCuisine
    ];
    const arthurFavoriteCuisines = [traditionalCuisine, steakhouseCuisine];
    const lucyFavoriteCuisines = [seafoodCuisine, chineseCuisine];
    const eventCardSummaryList = [];
    const coverImage1 = new NeverEatAlone.CoverImage(1,
      'resources/profile_page/images/userProfile.pattern.1-desktop.png');
    const coverImage2 = new NeverEatAlone.CoverImage(2,
      'resources/profile_page/images/userProfile.pattern.2-desktop.png');
    const coverImage3 = new NeverEatAlone.CoverImage(3,
      'resources/profile_page/images/userProfile.pattern.3-desktop.png');
    const coverImage4 = new NeverEatAlone.CoverImage(4,
      'resources/profile_page/images/userProfile.pattern.4-desktop.png');
    const coverImage5 = new NeverEatAlone.CoverImage(5,
      'resources/profile_page/images/userProfile.pattern.5-desktop.png');
    const coverImageList = [coverImage1, coverImage2, coverImage3, coverImage4,
      coverImage5];
    this._profilePageModelMap = new Map();

    /** User Profile Page Model for userEmma */
    const emmaCoverImage = coverImage2;
    const emmaBio = `Hello everyone! My name is Emma and I would love to meet 
      you all and try new foods.`;
    const arthurBio = `I host BBQ nights in my backyard! Love to meet lovely 
      people in my area.`
    const emmaInstagramLink = 'www.instagram.com/@emma12';
    const arthurInstagramLink = 'www.instagram.com/@arthur12'
    const emmaLocation = 'Barrie';
    const emmaProfilePageData = new NeverEatAlone.ProfilePageData(userEmma.id,
      emmaCoverImage, emmaProfileImage, false, false, false, emmaLocation,
      false, emmaLanguageList, false, emmaBio, false, '', false, '', false,
      emmaInstagramLink, false, emmaFavoriteCuisines);
    const demoProfilePageModel1 = new NeverEatAlone.LocalProfilePageModel(
      emmaProfilePageData, userEmma.name, userEmma.createdAt, [],
      [eventCardSummary1]);
    this._profilePageModelMap.set(1, demoProfilePageModel1);

    /** User Profile Page Model for userArthur */
    const arthurLocation = 'Toronto';
    const arthurCoverImage = coverImage1;
    const arthurProfilePageData = new NeverEatAlone.ProfilePageData(2,
      arthurCoverImage, arthurProfileImage, false, false, false, 'Toronto',
      false, arthurLanguageList, false, 'Ready to explore Toronto.', false,
      'www.facebook.com/arthur_van', false, 'www.twitter.com/@vanfan', true, '',
      false, arthurFavoriteCuisines);
    const demoProfilePageModel2 = new NeverEatAlone.LocalProfilePageModel(
      arthurProfilePageData, userArthur.name, userArthur.createdAt,
      [eventCardSummary7], [eventCardSummary1, eventCardSummary13]);
    this._profilePageModelMap.set(2, demoProfilePageModel2);

    /** User Profile Page Model for userLucy */
    const lucyCoverImage = coverImage5;
    const lucyProfilePageData = new NeverEatAlone.ProfilePageData(3,
      lucyCoverImage, new NeverEatAlone.UserProfileImage(3,
        'resources/images/profile2.jpeg'), false, true, false, 'Toronto, CA',
        false, lucyLanguageList, true, 'Matcha everything!', true, '', false,
        '', true, '', false, lucyFavoriteCuisines);
    const demoProfilePageModel3 = new NeverEatAlone.LocalProfilePageModel(
      lucyProfilePageData, 'Lucy', new Date(2022, 4, 2, 2, 30, 40),
      [eventCardSummary5], []);
    this._profilePageModelMap.set(3, demoProfilePageModel3);

    /** Setting up the _editProfilePageModel map. */
    this._editProfilePageModelMap = new Map();

    const locationList = ['Toronto', 'Barrie', 'Burlington', 'Hamilton',
      'Vancouver', 'Montreal', 'Vaughan'];
    const languageList = [englishLanguage, mandarinLanguage, spanishLanguage,
      frenchLanguage, farsiLanguage, germanLanguage];
    const cuisineList = [frenchCuisine, chineseCuisine, bbqCuisine,
      breweryCuisine, canadianCuisine, fusionCuisine, grillCuisine,
      italianCuisine, japaneseCuisine, middleEasternCuisine, modernCuisine,
      omakaseCuisine, persianCuisine, seafoodCuisine, steakhouseCuisine,
      traditionalCuisine];

    /** Emma's edit profie page model. */
    const demoEditProfilePageModel1 = new DemoEditProfilePageModel(
      emmaProfilePageData, coverImageList, languageList, cuisineList);
    this._editProfilePageModelMap.set(1, demoEditProfilePageModel1);

    /** Arthur's edit profie page model. */
    const demoEditProfilePageModel2 = new DemoEditProfilePageModel(
      arthurProfilePageData, coverImageList, languageList, cuisineList);
    this._editProfilePageModelMap.set(2, demoEditProfilePageModel2);

    /** Emma settings model */
    const emmaAccessTokenGoogle = '';
    const emmaAccessTokenFacebook = '';
    const emmaSocialLinks = [
      new NeverEatAlone.SocialAccount(NeverEatAlone.SocialAccountType.GOOGLE,
        emmaAccessTokenGoogle, 'emma@gmail.com'),
      new NeverEatAlone.SocialAccount(NeverEatAlone.SocialAccountType.FACEBOOK,
        emmaAccessTokenFacebook, 'emma@yahoo.com')];
    const emmaPassword = '123';
    const emmaVisaCard3333 = new NeverEatAlone.PaymentCard(1, 4520888855553333,
      'Emma McM', 12, 2027, 123, 'm4y 0v0', NeverEatAlone.CreditCardType.VISA);
    const emmaMastercard2222 = new NeverEatAlone.PaymentCard(2,
      5047888855552222, 'Emma McM', 5, 2023, 548, 'm4y 0v0',
      NeverEatAlone.CreditCardType.MASTERCARD);
    const emmaMastercard2589 = new NeverEatAlone.PaymentCard(3,
      303088855552589, 'Emma McM', 1, 2024, 6060, 'm4y 0v0',
      NeverEatAlone.CreditCardType.AMEX);
    const emmaPaymentCards = [emmaVisaCard3333, emmaMastercard2222,
      emmaMastercard2589];
    const paymentRecord1 = new NeverEatAlone.PaymentRecord(1,
      eventCardSummary1, [new NeverEatAlone.PaymentTransaction(1, 'No-Show Fee',
      25.00, NeverEatAlone.PaymentMethod.CREDIT_CARD,
      NeverEatAlone.CreditCardType.VISA, '1234', '', new Date(2023, 12, 11, 13,
      30, 30), null, NeverEatAlone.PaymentStatus.WILL_BE_CHARGED, 13),
      new NeverEatAlone.PaymentTransaction(2, 'Event Fee', 5.00,
      NeverEatAlone.PaymentMethod.CREDIT_CARD,
      NeverEatAlone.CreditCardType.VISA, '1234', '', null, new Date(
      2023, 10, 11, 13, 30, 30), NeverEatAlone.PaymentStatus.CHARGED, 13)]);
    const emmaPaymentRecords = [paymentRecord1];

    /** Setting up the settings page model. */
    this._settingsPageModelMap = new Map();
    const emmaNotificationSettings = new NeverEatAlone.NotificationSettings(
      true, false, true, true, false, true, false);
    const demoSettingsPageModel1 = new DemoSettingsPageModel(userEmma.name,
      emmaSocialLinks, emmaNotificationSettings, emmaMastercard2222,
      emmaPaymentCards, emmaPaymentRecords);
    this._settingsPageModelMap.set(1, demoSettingsPageModel1);

    /** arthur settings model */
    const arthurSocialLinks: NeverEatAlone.SocialAccount[] = [];
    const arthurPaymentRecords: NeverEatAlone.PaymentRecord[] = [
      new NeverEatAlone.PaymentRecord(2, eventCardSummary2, [
      new NeverEatAlone.PaymentTransaction(3, 'Event Fee', 15.00,
      NeverEatAlone.PaymentMethod.CREDIT_CARD,
      NeverEatAlone.CreditCardType.VISA, '1234', '', new Date(2021, 11, 10, 12,
      30, 30), null, NeverEatAlone.PaymentStatus.CHARGED, 13)])];
    const arthurVisa1234 = new NeverEatAlone.PaymentCard(4, 4520888855551234,
      'Emma McM', 12, 2027, 123, 'm4y 0v0', NeverEatAlone.CreditCardType.VISA);
    const arthurPaymentCards:NeverEatAlone.PaymentCard[] = [arthurVisa1234];
    const arthurPassword = '123';
    const arthurNotificationSettings = new NeverEatAlone.NotificationSettings(
      false, false, false, false, false, true, true);
    const demoSettingsPageModel2 = new DemoSettingsPageModel(userArthur.name,
      arthurSocialLinks, arthurNotificationSettings, arthurVisa1234,
      arthurPaymentCards, arthurPaymentRecords);
    this._settingsPageModelMap.set(2, demoSettingsPageModel2);
    this._deletedAccountSurveyModel = new DemoDeletedAccountSurveyModel();
    this._deactivateAccountSurveyModel = new DemoDeactivateAccountSurveyModel();

    /** Loading all models with load method. */
    this._signUpPageModelMap = new Map();
    const demoSignUpPageModel1 = new DemoSignUpPageModel(userArthur,
      arthurProfileImage);
    const demoSignUpPageModel2 = new DemoSignUpPageModel(userEmma,
      emmaProfileImage);
    this._signUpPageModelMap.set(1, demoSignUpPageModel1);
    this._signUpPageModelMap.set(2, demoSignUpPageModel2);
    this._googleClientId = '';
    this._emailConfirmationPageModelMap = new Map();
    const demoEmailConfirmationPageModel1 = 
      new NeverEatAlone.LocalEmailConfirmationPageModel(true, '', '');
    this._emailConfirmationPageModelMap.set(
      'e2a25428e17ec7b6e61e6ab514f64776b84e224bcde140f88718cc2d814089d9',
      demoEmailConfirmationPageModel1);
    this._resetPasswordPageModel =
      new NeverEatAlone.LocalResetPasswordPageModel(
        this._accountProfileImage.src, this._account);
    await Promise.all([this._homePageModel.load(),
      this._inviteAFoodieModel.load()]);
  }

  public get account(): NeverEatAlone.User {
    return this._account;
  }

  public async setAccount(account: NeverEatAlone.User): Promise<void> {
    this._account = account;
  }

  public updateAccountProfileImage(newImage: NeverEatAlone.UserProfileImage):
      void {
    this._accountProfileImage = newImage;
  }

  public get accountProfileImage(): NeverEatAlone.UserProfileImage {
    return this._accountProfileImage;
  }

  public get homePageModel(): NeverEatAlone.HomePageModel {
    return this._homePageModel;
  }

  public async updateHomePageModel(newModel: NeverEatAlone.HomePageModel):
      Promise<void> {
    this._homePageModel = newModel;
    await this.homePageModel.load();
  }

  public addDiningEventPageModel(id: number, diningEventPageModel:
      NeverEatAlone.DiningEventPageModel): void {
    this._diningEventPageModelMap.set(id, diningEventPageModel);
  }

  public getDiningEventPageModel(id: number):
      NeverEatAlone.DiningEventPageModel {
    return this._diningEventPageModelMap.get(id);
  }

  public async updateOnJoinRemoveSeat(): Promise<void> {}

  public get inviteAFoodieModel(): NeverEatAlone.InviteAFoodieModel {
    return this._inviteAFoodieModel;
  }

  public async updateInviteAFoodieModel(newModel:
      NeverEatAlone.InviteAFoodieModel): Promise<void> {
    this._inviteAFoodieModel = newModel;
    await this._inviteAFoodieModel.load();
  }

  public get joinModel(): NeverEatAlone.JoinModel {
    return this._joinModel;
  }

  public get partnerWithUsModel(): NeverEatAlone.PartnerWithUsModel {
    return this._partnerWithUsModel;
  }

  public get logInModel(): NeverEatAlone.LogInModel {
    return this._logInModel;
  }

  public get forgotPasswordPageModel(): NeverEatAlone.ForgotPasswordPageModel {
    return this._forgotPasswordPageModel;
  }

  public addProfilePageModel(id: number,
      profilePageModel: NeverEatAlone.ProfilePageModel): void {
    this._profilePageModelMap.set(id, profilePageModel);
  }

  public getProfilePageModel(id: number): NeverEatAlone.ProfilePageModel {
    return this._profilePageModelMap.get(id);
  }

  public async updateProfilePageModel(id: number, newModel:
      NeverEatAlone.ProfilePageModel): Promise<void>  {
    this._profilePageModelMap.set(id, newModel);
  }

  public addEditProfilePageModel(id: number, editProfilePageModel:
      NeverEatAlone.EditProfilePageModel): void {
    this._editProfilePageModelMap.set(id, editProfilePageModel);
  }

  public getEditProfilePageModel(id: number):
      NeverEatAlone.EditProfilePageModel {
    return this._editProfilePageModelMap.get(id);
  }

  public async updateEditProfilePageModel(id: number, newModel:
      NeverEatAlone.EditProfilePageModel): Promise<void> {
    this._editProfilePageModelMap.set(id, newModel);
  }

  public addSettingsPageModel(id: number,
      settingsPageModel: NeverEatAlone.SettingsPageModel): void {
    this._settingsPageModelMap.set(id, settingsPageModel);
  }

  public getSettingsPageModel(id: number): NeverEatAlone.SettingsPageModel {
    return this._settingsPageModelMap.get(id);
  }

  public async updateSettingsPageModel(id: number, newModel:
      NeverEatAlone.SettingsPageModel): Promise<void> {
    this._settingsPageModelMap.set(id, newModel);
  }

  public get deletedAccountSurveyModel():
      NeverEatAlone.DeletedAccountSurveyModel {
    return this._deletedAccountSurveyModel;
  }

  public get deactivateAccountSurveyModel():
      NeverEatAlone.DeactivateAccountSurveyModel {
    return this._deactivateAccountSurveyModel;
  }

  public addSignUpPageModel(id: number, signUpPageModel:
      NeverEatAlone.SignUpPageModel): void {
    this._signUpPageModelMap.set(id, signUpPageModel);
  }

  public getSignUpPageModel(id: number): NeverEatAlone.SignUpPageModel {
    return this._signUpPageModelMap.get(id);
  }

  public addEmailConfirmationPageModel(id: string, emailConfirmationPageModel:
      NeverEatAlone.EmailConfirmationPageModel): void {
    this._emailConfirmationPageModelMap.set(id, emailConfirmationPageModel);
  }

  public getEmailConfirmationPageModel(id: string):
      NeverEatAlone.EmailConfirmationPageModel {
    return this._emailConfirmationPageModelMap.get(id);
  }

  public get googleClientId(): string {
    return this._googleClientId;
  }

  public get resetPasswordPageModel(): NeverEatAlone.ResetPasswordPageModel {
    return this._resetPasswordPageModel;
  }

  private _account: NeverEatAlone.User;
  private _accountProfileImage: NeverEatAlone.UserProfileImage;
  private _homePageModel: NeverEatAlone.HomePageModel;
  private _diningEventPageModelMap: Map<number,
    NeverEatAlone.DiningEventPageModel>;
  private _inviteAFoodieModel: NeverEatAlone.InviteAFoodieModel;
  private _joinModel: NeverEatAlone.JoinModel;
  private _partnerWithUsModel: NeverEatAlone.PartnerWithUsModel;
  private _logInModel: NeverEatAlone.LogInModel;
  private _profilePageModelMap: Map<number, NeverEatAlone.ProfilePageModel>;
  private _editProfilePageModelMap: Map<number,
    NeverEatAlone.EditProfilePageModel>;
  private _settingsPageModelMap: Map<number, NeverEatAlone.SettingsPageModel>;
  private _deletedAccountSurveyModel: NeverEatAlone.DeletedAccountSurveyModel;
  private _deactivateAccountSurveyModel:
    NeverEatAlone.DeactivateAccountSurveyModel;
  private _forgotPasswordPageModel: NeverEatAlone.ForgotPasswordPageModel;
  private _signUpPageModelMap: Map<number, NeverEatAlone.SignUpPageModel>;
  private _googleClientId: string;
  private _emailConfirmationPageModelMap: Map<string,
    NeverEatAlone.EmailConfirmationPageModel>;
  private _resetPasswordPageModel: NeverEatAlone.ResetPasswordPageModel;
}
