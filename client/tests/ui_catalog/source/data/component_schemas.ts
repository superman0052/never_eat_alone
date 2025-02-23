import * as NeverEatAlone from 'never_eat_alone';
import { AddCreditCardFormErrorCodeInput, ArrayInput, AttendeeInput,
  BooleanInput, CardDetailsFormErrorCodeInput, CityProvinceInput, CSSInput,
  CuisineInput, CoverImageInput, DateInput, DateTimeInput, DisplayModeInput,
  DressCodeInput, EventCardSummaryInput, EventTagInput,
  ForgotPasswordPageErrorCodeInput, HomePageErrorCodeInput, LanguageInput,
  LocationInput, LogInModalErrorCodeInput, NumberInput, PaymentCardInput,
  PaymentRecordInput, RestaurantInput, SeatingInput, SignUpPageErrorCodeInput,
  SocialAccountInput, SocialAccountTypeInput, SocialMediaImageInput, TextInput,
  UserInput, UserProfileImageInput } from '../viewer/propertyInput';
import { ComponentSchema, PropertySchema, SignalSchema } from './schemas';

/** Loads the complete list of schemas available to test. */
export function loadComponentSchemas(): ComponentSchema[] {
  const logoSchema = new ComponentSchema('HeaderLogo',
    [new PropertySchema('style', {}, CSSInput),
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
    DisplayModeInput)], [], NeverEatAlone.HeaderLogo);
  const primaryTextButtonSchema = new ComponentSchema('Primary Text Button', [
    new PropertySchema('label', 'Get in touch', TextInput),
    new PropertySchema('labelStyle', {}, CSSInput),
    new PropertySchema('style', { width: '161px', height: '35px' }, CSSInput),
    new PropertySchema('disabled', false, BooleanInput)],
    [new SignalSchema('onClick', '', [])], NeverEatAlone.PrimaryTextButton);
  const invertedSecondaryTextButtonSchema = new ComponentSchema(
    'InvertedSecondaryTextButton',
    [
      new PropertySchema('style', {}, CSSInput),
      new PropertySchema('label', 'login', TextInput),
      new PropertySchema('labelStyle', {}, CSSInput),
      new PropertySchema('disabled', false, BooleanInput)],
    [new SignalSchema('onClick', '', [])],
    NeverEatAlone.InvertedSecondaryTextButton);
  const accentTextButtonSchema = new ComponentSchema(
    'AccentTextButton', [new PropertySchema('style', {}, CSSInput),
    new PropertySchema('label', 'join', TextInput),
    new PropertySchema('labelStyle', {}, CSSInput),
    new PropertySchema('disabled', false, BooleanInput)],
    [new SignalSchema('onClick', '', [])],
    NeverEatAlone.AccentTextButton);
  const whiteNavLinkSchema = new ComponentSchema(
    'WhiteNavLink', [
      new PropertySchema('label', 'What is NEA?', TextInput),
      new PropertySchema('to', '/What_is_NEA', TextInput),
      new PropertySchema('style', {}, CSSInput),
      new PropertySchema('className', '', TextInput)], [],
    NeverEatAlone.WhiteNavLink);
  const emailInputFieldSchema = new ComponentSchema('Email Inputfield', [
    new PropertySchema('hasError', false, BooleanInput),
    new PropertySchema('disabled', false, BooleanInput)
  ], [], NeverEatAlone.EmailInputField);
  const nameInputFieldSchema = new ComponentSchema('Name Inputfield', [
    new PropertySchema('iconSrc', '', TextInput),
    new PropertySchema('iconAlt', '', TextInput),
    new PropertySchema('hasError', false, BooleanInput),
    new PropertySchema('disabled', false, BooleanInput),
    new PropertySchema('iconStyle', {}, CSSInput),
    new PropertySchema('iconContainerStyle', {}, CSSInput)
  ], [], NeverEatAlone.NameInputField);
  const inputFieldSchema = new ComponentSchema('Inputfield', [
    new PropertySchema('hasError', false, BooleanInput),
    new PropertySchema('disabled', false, BooleanInput)
  ], [], NeverEatAlone.InputField);
  const headerNotLoggedInSchema = new ComponentSchema(
    'Header Not Logged in', [
      new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput),
      new PropertySchema('account', NeverEatAlone.User.makeGuest(),
      UserInput),
      new PropertySchema('profileImageSrc', '', TextInput)],
    [
      new SignalSchema('onMenuClick', '', []),
      new SignalSchema('onLogInButton', '', []),
      new SignalSchema('onJoinButton', '', []),
      new SignalSchema('onLogOut', '', [])],
    NeverEatAlone.Header);
  const headerLoggedInSchema = new ComponentSchema('Header Logged in', [
      new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput),
      new PropertySchema('account', new NeverEatAlone.User(2, 'Arthur2345',
      'info+arthur@nevereatalone.net', 'arthur2345',
      NeverEatAlone.UserStatus.ACTIVE, new Date()), UserInput),
      new PropertySchema('profileImageSrc', '', TextInput)],
    [
      new SignalSchema('onMenuClick', '', []),
      new SignalSchema('onLogInButton', '', []),
      new SignalSchema('onJoinButton', '', []),
      new SignalSchema('onLogOut', '', [])],
    NeverEatAlone.Header);
  const footerSchema = new ComponentSchema('Footer',
    [
      new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput),
      new PropertySchema('backgroundColor', 'transparent', TextInput),
      new PropertySchema('isBackgroundImage', true, BooleanInput)],
    [new SignalSchema('onInviteAFoodie', '', [])], NeverEatAlone.Footer);
  const heroNotLoggedInSchema = new ComponentSchema('Hero Not Loggedin',
    [
      new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput),
      new PropertySchema('account', NeverEatAlone.User.makeGuest(), UserInput),
      new PropertySchema('numberOfTotalEventsInMonth', 10, NumberInput),
      new PropertySchema('eventTagList', [], ArrayInput(new PropertySchema(
      'eventTag', new NeverEatAlone.EventTag(1, 'Join us for dinner', 'yellow'),
      EventTagInput)))],
    [new SignalSchema('onJoinButton', '', [])], NeverEatAlone.Hero);
  const heroLoggedInNoEventSchema = new ComponentSchema('Hero Loggedin No Event'
    ,[
      new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput),
      new PropertySchema('account', new NeverEatAlone.User(2, 'Arthur2345',
      'info+arthur@nevereatalone.net', 'arthur2345',
      NeverEatAlone.UserStatus.ACTIVE, new Date()), UserInput),
      new PropertySchema('numberOfTotalEventsInMonth', 10, NumberInput),
      new PropertySchema('eventTagList', [], ArrayInput(new PropertySchema(
      'eventTag', new NeverEatAlone.EventTag(1, 'Join us for dinner', 'yellow'),
      EventTagInput)))],
    [new SignalSchema('onJoinButton', '', [])], NeverEatAlone.Hero);
  const heroLoggedInWithEventSchema = new ComponentSchema('Hero Loggedin With \
    Event', [
      new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput),
      new PropertySchema('account', new NeverEatAlone.User(2, 'Arthur2345',
      'info+arthur@nevereatalone.net', 'arthur2345',
      NeverEatAlone.UserStatus.ACTIVE, new Date()), UserInput),
      new PropertySchema('numberOfTotalEventsInMonth', 10, NumberInput),
      new PropertySchema('eventTagList', [new NeverEatAlone.EventTag(1,
      'Join us for dinner', 'yellow'), new NeverEatAlone.EventTag(2,
      'Brunch with a show!', 'orange'), new NeverEatAlone.EventTag(3,
      'dinner and live music', 'blue'), new NeverEatAlone.EventTag(4,
      'Best new restaurants serries', 'red')], ArrayInput(new PropertySchema(
      'eventTag', new NeverEatAlone.EventTag(1, 'Join us for dinner', 'yellow'),
      EventTagInput)))],
    [new SignalSchema('onJoinButton', '', [])], NeverEatAlone.Hero);
  const diningEventCardSchema = new ComponentSchema('Dining Event Card',
    [
      new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput),
      new PropertySchema('id', -1, NumberInput),
      new PropertySchema('imageSrc', '', TextInput),
      new PropertySchema('title',
      'Must try! Best french restaurant in the city.', TextInput),
      new PropertySchema('restaurantName', 'Le Banane', TextInput),
      new PropertySchema('priceRange', NeverEatAlone.PriceRange.EXPENSIVE,
      TextInput),
      new PropertySchema('startTime', new Date(2022, 6, 17, 18, 30), DateInput),
      new PropertySchema('endTime', new Date(2022, 6, 18, 0, 30), DateInput),
      new PropertySchema('cuisines', [
      new NeverEatAlone.Cuisine(1, 'Steakhouse', '#FFE1D8'),
      new NeverEatAlone.Cuisine(2, 'Japanese', '#DBFFFB'),
      new NeverEatAlone.Cuisine(3, 'Modern', '#FFF2FE')],
      ArrayInput(new PropertySchema(
      'cuisine', new NeverEatAlone.Cuisine(1, 'French', 'yellow'),
      CuisineInput))),
      new PropertySchema('numberOfAttendees', 12, NumberInput),
      new PropertySchema('numberOfSeats', 15, NumberInput),
      new PropertySchema('isAttending', false, BooleanInput),
      new PropertySchema('isLoggedIn', false, BooleanInput),
      new PropertySchema('color', 'blue', TextInput),
      new PropertySchema('style', {}, CSSInput),
      new PropertySchema('className', '', TextInput)],
      [], NeverEatAlone.DiningEventCard);
  const albumCardSchema = new ComponentSchema('AlbumCard', [
      new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput),
      new PropertySchema('id', 1, NumberInput),
      new PropertySchema('src', 'resources/images/1.jpg', TextInput)],
    [new SignalSchema('onClick', '', [])], NeverEatAlone.AlbumCard);
  const userUpcomingEventsSummarySchema = new ComponentSchema(
    'UserUpcomingEventsSummary', [
      new PropertySchema('displayMode', NeverEatAlone.DisplayMode.MOBILE,
      DisplayModeInput),
      new PropertySchema('upcomingEventList', [
      new NeverEatAlone.EventCardSummary(1, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0), new Date(
      2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')],
      'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(2, 'A night to remmeber at the best \
      italian restaurant in town!', new Date(2022, 5, 22, 19, 30, 0),
      new Date(2022, 6, 13, 0, 30, 0), 'Piano Piano Restaurant',
      NeverEatAlone.PriceRange.EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Italian', 'blue')], 'resources/images/4.jpg', 4, 6, false, 'red'),
      new NeverEatAlone.EventCardSummary(3, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(4, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/4.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(5, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/5.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(6, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/6.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(7, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/7.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(8, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/8.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(9, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/9.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(10, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/10.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(11, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/11.jpg', 6, 6, false, 'green'),
      new NeverEatAlone.EventCardSummary(12, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/12.jpg', 6, 6, false, 'black')],
      ArrayInput(
        new PropertySchema('EventCardSummary',
        new NeverEatAlone.EventCardSummary(1, 'best french restaurant',
        new Date(2022, 6, 12, 19, 0, 0), new Date(2022, 6, 12, 23, 0, 0),
        'Le Select', NeverEatAlone.PriceRange.EXPENSIVE, [], '', 12, 12, true,
        'yellow'), EventCardSummaryInput)))
    ], [], NeverEatAlone.UserUpcomingEventsSummary);
  const exploreEventsSummarySchema = new ComponentSchema('ExploreEventsSummary',
    [
      new PropertySchema('displayMode', NeverEatAlone.DisplayMode.MOBILE,
      DisplayModeInput),
      new PropertySchema('eventList', [
      new NeverEatAlone.EventCardSummary(1, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(2, 'A night to remmeber at the best \
      italian restaurant in town!', new Date(2022, 5, 22, 19, 30, 0),
      new Date(2022, 6, 13, 0, 30, 0), 'Piano Piano Restaurant',
      NeverEatAlone.PriceRange.EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Italian', 'blue')], 'resources/images/4.jpg', 4, 6, false, 'red'),
      new NeverEatAlone.EventCardSummary(3, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(4, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/4.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(5, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/5.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(6, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/6.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(7, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/7.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(8, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/8.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(9, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/9.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(10, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/10.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(11, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/11.jpg', 6, 6, false, 'green'),
      new NeverEatAlone.EventCardSummary(12, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/12.jpg', 6, 6, false, 'black')],
      ArrayInput(
        new PropertySchema('EventCardSummary',
        new NeverEatAlone.EventCardSummary(1, 'best french restaurant',
        new Date(2022, 6, 12, 19, 0, 0), new Date(2022, 6, 12, 23, 0, 0),
        'Le Select', NeverEatAlone.PriceRange.EXPENSIVE, [], '', 12, 12, true,
        'yellow'), EventCardSummaryInput))),
      new PropertySchema('isLoggedIn', false, BooleanInput)
    ], [], NeverEatAlone.ExploreEventsSummary);
    const exploreEventsSummaryEmptySchema = new ComponentSchema(
      'ExploreEventsSummary Empty', [
      new PropertySchema('displayMode', NeverEatAlone.DisplayMode.MOBILE,
      DisplayModeInput),
      new PropertySchema('eventList', [],
      ArrayInput(
        new PropertySchema('EventCardSummary',
        new NeverEatAlone.EventCardSummary(1, 'best french restaurant',
        new Date(2022, 6, 12, 19, 0, 0), new Date(2022, 6, 12, 23, 0, 0),
        'Le Select', NeverEatAlone.PriceRange.EXPENSIVE, [], '', 12, 12, true,
        'yellow'), EventCardSummaryInput))),
      new PropertySchema('isLoggedIn', false, BooleanInput)
    ], [], NeverEatAlone.ExploreEventsSummary);
  const albumSummarySchema = new ComponentSchema('Live Album', [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
    DisplayModeInput),
    new PropertySchema('imageList', [
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
      new NeverEatAlone.SocialMediaImage(12, 'resources/images/13.jpg'),
    ],
      ArrayInput(new PropertySchema(
      'socialMediaImage', new NeverEatAlone.SocialMediaImage(1,
      'resources/images/2.jpg'), SocialMediaImageInput)))
    ], [], NeverEatAlone.AlbumSummary);
  const partnerWithUsSummarySchema = new ComponentSchema('Partner With Us \
    Summary', [
      new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput)], [], NeverEatAlone.PartnerWithUsSummary);
  const homePageNotLoggedSchema = new ComponentSchema('HomePage Not Loggedin',
    [
      new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput),
      new PropertySchema('account', NeverEatAlone.User.makeGuest(), UserInput),
      new PropertySchema('errorCode', NeverEatAlone.HomePage.ErrorCode.NONE,
      HomePageErrorCodeInput),
      new PropertySchema('numberOfTotalEventsInMonth', 6, NumberInput),
      new PropertySchema('imageList', [
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
      new NeverEatAlone.SocialMediaImage(12, 'resources/images/13.jpg'),
      ],
      ArrayInput(new PropertySchema('socialMediaImage',
      new NeverEatAlone.SocialMediaImage(1, 'resources/images/2.jpg'),
      SocialMediaImageInput))),
      new PropertySchema('eventList', [
      new NeverEatAlone.EventCardSummary(1, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(2, 'A night to remmeber at the best \
      italian restaurant in town!', new Date(2022, 5, 22, 19, 30, 0),
      new Date(2022, 6, 13, 0, 30, 0), 'Piano Piano Restaurant',
      NeverEatAlone.PriceRange.EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Italian', 'blue')], 'resources/images/4.jpg', 4, 6, false, 'red'),
      new NeverEatAlone.EventCardSummary(3, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(4, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/4.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(5, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/5.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(6, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/6.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(7, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/7.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(8, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/8.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(9, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/9.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(10, 'A night to remmeber at the \
      best sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/10.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(11, 'A night to remmeber at the \
      best sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/11.jpg', 6, 6, false, 'green'),
      new NeverEatAlone.EventCardSummary(12, 'A night to remmeber at the \
      best sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/12.jpg', 6, 6, false, 'black')],
      ArrayInput(
        new PropertySchema('EventCardSummary',
        new NeverEatAlone.EventCardSummary(1, 'best french restaurant',
        new Date(2022, 6, 12, 19, 0, 0), new Date(2022, 6, 12, 23, 0, 0),
        'Le Select', NeverEatAlone.PriceRange.EXPENSIVE, [], '', 12, 12, true,
        'yellow'), EventCardSummaryInput))),
      new PropertySchema('eventTagList', [], ArrayInput(new PropertySchema(
        'eventTag', new NeverEatAlone.EventTag(1, 'Join us for dinner',
        'yellow'), EventTagInput))),
      new PropertySchema('userFutureEventList', [], ArrayInput(
        new PropertySchema('UpcomingEvent',
        new NeverEatAlone.EventCardSummary(1, 'best french restaurant',
        new Date(2022, 6, 12, 19, 0, 0), new Date(2022, 6, 12, 23, 0, 0),
        'Le Select', NeverEatAlone.PriceRange.EXPENSIVE, [], '', 12, 12, true,
        'yellow'), EventCardSummaryInput))),
    ],
    [new SignalSchema('onJoinButton', '', [])], NeverEatAlone.HomePage);
  const homePageLoggedInSchema = new ComponentSchema('HomePage Loggedin',
    [
      new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput),
      new PropertySchema('account', new NeverEatAlone.User(2, 'Arthur2345',
        'info+arthur@nevereatalone.net', 'arthur2345',
        NeverEatAlone.UserStatus.ACTIVE, new Date()), UserInput),
      new PropertySchema('errorCode', NeverEatAlone.HomePage.ErrorCode.NONE,
      HomePageErrorCodeInput),
      new PropertySchema('numberOfTotalEventsInMonth', 6, NumberInput),
      new PropertySchema('imageList', [
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
        new NeverEatAlone.SocialMediaImage(12, 'resources/images/13.jpg'),
      ],
      ArrayInput(new PropertySchema('socialMediaImage',
      new NeverEatAlone.SocialMediaImage(1, 'resources/images/2.jpg'),
      SocialMediaImageInput))),
      new PropertySchema('eventList', [
      new NeverEatAlone.EventCardSummary(1, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(2, 'A night to remmeber at the best \
      italian restaurant in town!', new Date(2022, 5, 22, 19, 30, 0),
      new Date(2022, 6, 13, 0, 30, 0), 'Piano Piano Restaurant',
      NeverEatAlone.PriceRange.EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Italian', 'blue')], 'resources/images/4.jpg', 4, 6, false, 'red'),
      new NeverEatAlone.EventCardSummary(3, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(4, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/4.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(5, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/5.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(6, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/6.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(7, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/7.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(8, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/8.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(9, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/9.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(10, 'A night to remmeber at the \
      best sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/10.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(11, 'A night to remmeber at the \
      best sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/11.jpg', 6, 6, false, 'green'),
      new NeverEatAlone.EventCardSummary(12, 'A night to remmeber at the \
      best sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/12.jpg', 6, 6, false, 'black')],
      ArrayInput(
        new PropertySchema('EventCardSummary',
        new NeverEatAlone.EventCardSummary(1, 'best french restaurant',
        new Date(2022, 6, 12, 19, 0, 0), new Date(2022, 6, 12, 23, 0, 0),
        'Le Select', NeverEatAlone.PriceRange.EXPENSIVE, [], '', 12, 12, true,
        'yellow'), EventCardSummaryInput))),
      new PropertySchema('eventTagList', [new NeverEatAlone.EventTag(1,
        'Join us for dinner', 'yellow'), new NeverEatAlone.EventTag(2,
        'Brunch with a show!', 'orange'), new NeverEatAlone.EventTag(3,
        'dinner and live music', 'blue'), new NeverEatAlone.EventTag(4,
        'Best new restaurants serries', 'red')], ArrayInput(new PropertySchema(
        'eventTag', new NeverEatAlone.EventTag(1, 'Join us for dinner',
        'yellow'), EventTagInput))),
      new PropertySchema('userFutureEventList', [
      new NeverEatAlone.EventCardSummary(1, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0), new Date(
      2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')],
      'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(2, 'A night to remmeber at the best \
      italian restaurant in town!', new Date(2022, 5, 22, 19, 30, 0),
      new Date(2022, 6, 13, 0, 30, 0), 'Piano Piano Restaurant',
      NeverEatAlone.PriceRange.EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Italian', 'blue')], 'resources/images/4.jpg', 4, 6, false, 'red'),
      new NeverEatAlone.EventCardSummary(3, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(4, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/4.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(5, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/5.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(6, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/6.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(7, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/7.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(8, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/8.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(9, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/9.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(10, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/10.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(11, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/11.jpg', 6, 6, false, 'green'),
      new NeverEatAlone.EventCardSummary(12, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/12.jpg', 6, 6, false, 'black')
      ], ArrayInput(
        new PropertySchema('UpcomingEvent',
        new NeverEatAlone.EventCardSummary(1, 'best french restaurant',
        new Date(2022, 6, 12, 19, 0, 0), new Date(2022, 6, 12, 23, 0, 0),
        'Le Select', NeverEatAlone.PriceRange.EXPENSIVE, [], '', 12, 12, true,
        'yellow'), EventCardSummaryInput)))
    ],
    [new SignalSchema('onJoinButton', '', [])], NeverEatAlone.HomePage);
  const joinModalSchema = new ComponentSchema('JoinModal' , [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput),
    new PropertySchema('name', '', TextInput),
    new PropertySchema('email', '', TextInput),
    new PropertySchema('referralCode', '', TextInput),
    new PropertySchema('nameHasError', false, BooleanInput),
    new PropertySchema('emailHasError', false, BooleanInput),
    new PropertySchema('nameErrorMessage', '', TextInput),
    new PropertySchema('emailErrorMessage', '', TextInput),
    ], [new SignalSchema('onClose', '', []), new SignalSchema('onRequestJoin',
    '', [])], NeverEatAlone.JoinModal);
  const closeButtonSchema = new ComponentSchema('Close Button', [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput)], [] , NeverEatAlone.CloseButton);
  const JoinRequestSentModalSchema = new ComponentSchema('JoinRequestSentModal',
    [new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
    DisplayModeInput), new PropertySchema('email', 'foo@gmail.com', TextInput)],
    [new SignalSchema('onClose', '', [])], NeverEatAlone.JoinRequestSentModal);
  const signUpPageSchema = new ComponentSchema('SignUpPage', [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput),
    new PropertySchema('email', 'sh@gmail.com', TextInput),
    new PropertySchema('errorCode', NeverEatAlone.SignUpPage.ErrorCode.NONE,
      SignUpPageErrorCodeInput)], [new SignalSchema('onSignUp', '', [])],
    NeverEatAlone.SignUpPage);
  const profileSetUpPageSchema = new ComponentSchema('ProfileSetUpPage', [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput),
    new PropertySchema('displayName', 'Riley Spire', TextInput),
    new PropertySchema('selectedImage', new NeverEatAlone.UserProfileImage(
      1, 'resources/profile_set_up_page/icons/profile-image-0.svg'),
      UserProfileImageInput),
    new PropertySchema('avatars', [new NeverEatAlone.UserProfileImage(1,
      'resources/profile_set_up_page/icons/profile-image-0.svg'),
      new NeverEatAlone.UserProfileImage(1,
        'resources/profile_set_up_page/icons/profile-image-1.svg')],
      ArrayInput(new PropertySchema('selectedImage',
        new NeverEatAlone.UserProfileImage(1,
        'resources/profile_set_up_page/icons/profile-image-0.svg'),
        UserProfileImageInput)))], [
    new SignalSchema('onLetsGoClick', '', []),
    new SignalSchema('onUploadImageClick', '', []),
    new SignalSchema('onAvatarClick', '', []),
    new SignalSchema('onDisplayNameChange', '', [])],
    NeverEatAlone.ProfileSetUpPage);
  const avatarWithCheckMarkSchema = new ComponentSchema('AvatarWithCheckMark',
    [new PropertySchema('imageSrc',
    'resources/profile_set_up_page/icons/profile-image-0.svg', TextInput),
    new PropertySchema('isMarked', true, BooleanInput)], [new SignalSchema(
    'onClick', '', [])], NeverEatAlone.AvatarWithCheckMark);
  const checkBoxSchema = new ComponentSchema('CheckBox', [
    new PropertySchema('label', 'Remember me', TextInput),
    new PropertySchema('disabled', true, BooleanInput),
    new PropertySchema('hasError', false, BooleanInput),
    new PropertySchema('checked', true, BooleanInput)
    ], [new SignalSchema('onBoxClick', '', [])], NeverEatAlone.CheckBox);
  const googleLogInButtonSchema = new ComponentSchema('GoogleLogInButton', [
    new PropertySchema('label', 'Log in with Google', TextInput),
    new PropertySchema('style', {} , CSSInput),
    new PropertySchema('disabled', false, BooleanInput)], [
    new SignalSchema('onClick', '' , [])], NeverEatAlone.GoogleLogInButton);
  const facebookLogInButtonSchema = new ComponentSchema('FacebookLogInButton', [
    new PropertySchema('label', 'Log in with Facebook', TextInput),
    new PropertySchema('style', {}, CSSInput),
    new PropertySchema('disabled', false, BooleanInput)], [
    new SignalSchema('onClick', '' , [])], NeverEatAlone.FacebookLogInButton);
  const logInModalSchema = new ComponentSchema('LogInModal', [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.MOBILE,
      DisplayModeInput),
    new PropertySchema('email', 'emma@gmail.com', TextInput),
    new PropertySchema('password', '', TextInput),
    new PropertySchema('rememberMe', false, BooleanInput),
    new PropertySchema('errorCode', NeverEatAlone.LogInModal.ErrorCode.NONE,
      LogInModalErrorCodeInput)],
    [new SignalSchema('onLogIn', '', []),
    new SignalSchema('onClose', '', [])], NeverEatAlone.LogInModal);
  const forgotPasswordPageSchema = new ComponentSchema('ForgotPasswordPage',
    [new PropertySchema('displayMode', NeverEatAlone.DisplayMode.MOBILE,
      DisplayModeInput),
    new PropertySchema('errorCode',
      NeverEatAlone.ForgotPasswordPage.ErrorCode.NONE,
      ForgotPasswordPageErrorCodeInput),
    new PropertySchema('email', 'arthur@gmail.com', TextInput)],
    [new SignalSchema('onSendLinkClick', '', [])],
    NeverEatAlone.ForgotPasswordPage);
  const forgotPasswordLinkSentPageSchema = new ComponentSchema(
    'ForgotPasswordLinkSentPage',
    [new PropertySchema('displayMode', NeverEatAlone.DisplayMode.MOBILE,
    DisplayModeInput)],
    [new SignalSchema('onResendLinkClick', '', [])],
    NeverEatAlone.ForgotPasswordLinkSentPage);
  const secondaryTextLinkButton = new ComponentSchema('SecondaryTextLinkButton',
    [new PropertySchema('label', 'Resend Link', TextInput),
    new PropertySchema('labelStyle', { fontSize: '14px' } , CSSInput)], [],
    NeverEatAlone.SecondaryTextLinkButton);
  const secondaryButtonNavLink = new ComponentSchema('SecondaryButtonNavLink',
    [new PropertySchema('label', 'Back to HomePage', TextInput),
    new PropertySchema('style', { width: '178px' } , CSSInput),
    new PropertySchema('className', JSON.stringify({ fontSize: '14px' }) ,
    TextInput)], [], NeverEatAlone.SecondaryButtonNavLink);
  const resetPasswordPage = new ComponentSchema('ResetPasswordPage',
    [new PropertySchema('displayMode', NeverEatAlone.DisplayMode.MOBILE,
    DisplayModeInput), new PropertySchema('displayName', 'Ella', TextInput),
    new PropertySchema('profileImageSrc', 'resources/images/profile3.jpeg',
    TextInput)], [new SignalSchema('onSaveClick', '', [])],
    NeverEatAlone.ResetPasswordPage);
  const profileBoxSchema = new ComponentSchema('ProfileBox',
    [new PropertySchema('profileImageSrc', 'resources/images/profile2.jpeg',
      TextInput),
    new PropertySchema('displayName', 'Julia', TextInput),
    new PropertySchema('userName', '@julia453', TextInput),
    new PropertySchema('biography', 'Hello everyone! My name is julia and I \
      would love to meet you all and try new foods.', TextInput),
    new PropertySchema('facebookLink', 'https://facebook.com', TextInput),
    new PropertySchema('twitterLink', 'https://twitter.com', TextInput),
    new PropertySchema('instagramLink', 'https://instagram.com', TextInput),
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.MOBILE,
      DisplayModeInput),
    new PropertySchema('memberSince', new Date(2022, 0, 1), DateInput),
    new PropertySchema('location', NeverEatAlone.CityProvince.defaultLocation(),
      CityProvinceInput),
    new PropertySchema('favoriteCuisineList', [
      new NeverEatAlone.Cuisine(1, 'Steakhouse', '#E5FFD8'),
      new NeverEatAlone.Cuisine(2, 'Japanese', '#FFFDD8'),
      new NeverEatAlone.Cuisine(3, 'Modern', '#FFE1D8')],
      ArrayInput(new PropertySchema(
      'cuisine', new NeverEatAlone.Cuisine(1, 'French', 'yellow'),
      CuisineInput))),
    new PropertySchema('languageList', ['English', 'French', 'Chinese'],
      ArrayInput(new PropertySchema('language', 'English', TextInput)))
    ], [new SignalSchema('onEditClick', '', []),
    new SignalSchema('onReportClick', '', [])], NeverEatAlone.ProfileBox);
  const showAllButtonSchema = new ComponentSchema('ShowAllButton',
    [new PropertySchema('label', 'Show All Events (21)', TextInput)],
    [new SignalSchema('onClick', '', [])], NeverEatAlone.ShowAllButton);
  const showLessButtonSchema = new ComponentSchema('ShowLessButton',
    [], [new SignalSchema('onClick', '', [])], NeverEatAlone.ShowLessButton);
  const profileUpcomingEventsSchema = new ComponentSchema(
    'ProfileUpcomingEvents', [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.MOBILE,
      DisplayModeInput),
    new PropertySchema('isLoggedIn', true, BooleanInput),
    new PropertySchema('eventList', [
      new NeverEatAlone.EventCardSummary(1, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0), new Date(
      2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')],
      'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(2, 'A night to remmeber at the best \
      italian restaurant in town!', new Date(2022, 5, 22, 19, 30, 0),
      new Date(2022, 6, 13, 0, 30, 0), 'Piano Piano Restaurant',
      NeverEatAlone.PriceRange.EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Italian', 'blue')], 'resources/images/4.jpg', 4, 6, false, 'red'),
      new NeverEatAlone.EventCardSummary(3, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(4, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/4.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(5, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/5.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(6, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/6.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(7, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/7.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(8, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/8.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(9, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/9.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(10, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/10.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(11, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/11.jpg', 6, 6, false, 'green'),
      new NeverEatAlone.EventCardSummary(12, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/12.jpg', 6, 6, false, 'black')
    ], ArrayInput(
      new PropertySchema('EventCardSummary',
      new NeverEatAlone.EventCardSummary(1, 'best french restaurant',
      new Date(2022, 6, 12, 19, 0, 0), new Date(2022, 6, 12, 23, 0, 0),
      'Le Select', NeverEatAlone.PriceRange.EXPENSIVE, [], '', 12, 12, true,
      'yellow'), EventCardSummaryInput)))
    ], [], NeverEatAlone.ProfileUpcomingEvents);
  const profilePastEventsSchema = new ComponentSchema('ProfilePastEvents',
    [new PropertySchema('displayMode', NeverEatAlone.DisplayMode.MOBILE,
    DisplayModeInput),
    new PropertySchema('isLoggedIn', true, BooleanInput),
    new PropertySchema('eventList', [
      new NeverEatAlone.EventCardSummary(1, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0), new Date(
      2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')],
      'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(2, 'A night to remmeber at the best \
      italian restaurant in town!', new Date(2022, 5, 22, 19, 30, 0),
      new Date(2022, 6, 13, 0, 30, 0), 'Piano Piano Restaurant',
      NeverEatAlone.PriceRange.EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Italian', 'blue')], 'resources/images/4.jpg', 4, 6, false, 'red'),
      new NeverEatAlone.EventCardSummary(3, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(4, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/4.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(5, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/5.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(6, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/6.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(7, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/7.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(8, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/8.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(9, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/9.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(10, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/10.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(11, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/11.jpg', 6, 6, false, 'green'),
      new NeverEatAlone.EventCardSummary(12, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/12.jpg', 6, 6, false, 'black'),
      new NeverEatAlone.EventCardSummary(4, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/4.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(5, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/5.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(6, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/6.jpg', 6, 6, false, 'yellow')
    ], ArrayInput(
      new PropertySchema('EventCardSummary',
      new NeverEatAlone.EventCardSummary(1, 'best french restaurant',
      new Date(2022, 6, 12, 19, 0, 0), new Date(2022, 6, 12, 23, 0, 0),
      'Le Select', NeverEatAlone.PriceRange.EXPENSIVE, [], '', 12, 12, true,
      'yellow'), EventCardSummaryInput)))
    ], [], NeverEatAlone.ProfilePastEvents);
  const profilePageSchema = new ComponentSchema('ProfilePage', [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.MOBILE,
      DisplayModeInput),
    new PropertySchema('coverImageSrc',
      'resources/profile_page/images/userProfile.pattern.3-desktop.png',
      TextInput),
    new PropertySchema('profileImageSrc', 'resources/images/profile2.jpeg',
      TextInput),
    new PropertySchema('displayName', 'Julia', TextInput),
    new PropertySchema('userName', '@julia453', TextInput),
    new PropertySchema('isLoggedIn', true, BooleanInput),
    new PropertySchema('biography', 'Hello everyone! My name is julia and I \
      would love to meet you all and try new foods.', TextInput),
    new PropertySchema('facebookLink', 'https://facebook.com', TextInput),
    new PropertySchema('twitterLink', 'https://twitter.com', TextInput),
    new PropertySchema('instagramLink', 'https://instagram.com', TextInput),
    new PropertySchema('memberSince', new Date(2022, 0, 1), DateInput),
    new PropertySchema('location', NeverEatAlone.CityProvince.defaultLocation(),
      CityProvinceInput),
    new PropertySchema('favoriteCuisineList', [
      new NeverEatAlone.Cuisine(1, 'Steakhouse', '#E5FFD8'),
      new NeverEatAlone.Cuisine(2, 'Japanese', '#FFFDD8'),
      new NeverEatAlone.Cuisine(3, 'Modern', '#FFE1D8')],
      ArrayInput(new PropertySchema(
      'cuisine', new NeverEatAlone.Cuisine(1, 'French', 'yellow'),
      CuisineInput))),
    new PropertySchema('languageList', ['English', 'French', 'Chinese'],
      ArrayInput(new PropertySchema('language', 'English', TextInput))),
    new PropertySchema('upcomingEventList', [
      new NeverEatAlone.EventCardSummary(1, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0), new Date(
      2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')],
      'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(2, 'A night to remmeber at the best \
      italian restaurant in town!', new Date(2022, 5, 22, 19, 30, 0),
      new Date(2022, 6, 13, 0, 30, 0), 'Piano Piano Restaurant',
      NeverEatAlone.PriceRange.EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Italian', 'blue')], 'resources/images/4.jpg', 4, 6, false, 'red'),
      new NeverEatAlone.EventCardSummary(3, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(4, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/4.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(5, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/5.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(6, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/6.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(7, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/7.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(8, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/8.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(9, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/9.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(10, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/10.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(11, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/11.jpg', 6, 6, false, 'green'),
      new NeverEatAlone.EventCardSummary(12, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2022, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/12.jpg', 6, 6, false, 'black')],
      ArrayInput(
        new PropertySchema('EventCardSummary',
        new NeverEatAlone.EventCardSummary(1, 'best french restaurant',
        new Date(2022, 6, 12, 19, 0, 0), new Date(2022, 6, 12, 23, 0, 0),
        'Le Select', NeverEatAlone.PriceRange.EXPENSIVE, [], '', 12, 12, true,
        'yellow'), EventCardSummaryInput))),
    new PropertySchema('pastEventList', [
      new NeverEatAlone.EventCardSummary(1, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2021, 6, 12, 19, 0, 0), new Date(
      2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')],
      'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(2, 'A night to remmeber at the best \
      italian restaurant in town!', new Date(2021, 5, 22, 19, 30, 0),
      new Date(2022, 6, 13, 0, 30, 0), 'Piano Piano Restaurant',
      NeverEatAlone.PriceRange.EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Italian', 'blue')], 'resources/images/4.jpg', 4, 6, false, 'red'),
      new NeverEatAlone.EventCardSummary(3, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2021, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/3.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(4, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2021, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/4.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(5, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2021, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/5.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(6, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2021, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/6.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(7, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2021, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/7.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(8, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2021, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/8.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(9, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2021, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/9.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(10, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2021, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/10.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(11, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2021, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/11.jpg', 6, 6, false, 'green'),
      new NeverEatAlone.EventCardSummary(12, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2021, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/12.jpg', 6, 6, false, 'black'),
      new NeverEatAlone.EventCardSummary(4, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2021, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/4.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(5, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2021, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/5.jpg', 6, 6, false, 'yellow'),
      new NeverEatAlone.EventCardSummary(6, 'A night to remmeber at the best \
      sushi restaurant in town!', new Date(2021, 6, 12, 19, 0, 0),
      new Date(2022, 6, 13, 1, 0, 0), 'Yukashi Japanese Restaurant',
      NeverEatAlone.PriceRange.VERY_EXPENSIVE, [new NeverEatAlone.Cuisine(1,
      'Japanese', 'yellow'), new NeverEatAlone.Cuisine(2, 'Omakase', 'orange')
      ], 'resources/images/6.jpg', 6, 6, false, 'yellow')
    ], ArrayInput(
      new PropertySchema('EventCardSummary',
      new NeverEatAlone.EventCardSummary(1, 'best french restaurant',
      new Date(2022, 6, 12, 19, 0, 0), new Date(2021, 6, 12, 23, 0, 0),
      'Le Select', NeverEatAlone.PriceRange.EXPENSIVE, [], '', 12, 12, true,
      'yellow'), EventCardSummaryInput)))
    ], [new SignalSchema('onEditClick', '', []),
    new SignalSchema('onReportClick', '', [])], NeverEatAlone.ProfilePage);
  const editProfilePageSchema = new ComponentSchema('EditProfilePage', [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.MOBILE,
      DisplayModeInput),
    new PropertySchema('displayName', 'Casper Host', TextInput),
    new PropertySchema('userName', '@120498509', TextInput),
    new PropertySchema('profileUserId', 1, NumberInput),
    new PropertySchema('coverImage', new NeverEatAlone.CoverImage(2,
      'resources/profile_page/images/userProfile.pattern.2-desktop.png'),
      CoverImageInput),
    new PropertySchema('coverImageList', [
        new NeverEatAlone.CoverImage(2,
          'resources/profile_page/images/userProfile.pattern.2-desktop.png'),
        new NeverEatAlone.CoverImage(1,
          'resources/profile_page/images/userProfile.pattern.1-desktop.png'),
        new NeverEatAlone.CoverImage(3,
          'resources/profile_page/images/userProfile.pattern.3-desktop.png'),
        new NeverEatAlone.CoverImage(4,
          'resources/profile_page/images/userProfile.pattern.4-desktop.png')
      ],
      ArrayInput(new PropertySchema('coverImage', new NeverEatAlone.CoverImage(
        2, 'resources/profile_page/images/userProfile.pattern.2-desktop.png'),
        CoverImageInput))),
    new PropertySchema('profileImageSrc', 'resources/images/profileguy5.jpeg',
      TextInput),
    new PropertySchema('isUpcomingEventsPrivate', false, BooleanInput),
    new PropertySchema('isPastEventsPrivate', true, BooleanInput),
    new PropertySchema('isLocationPrivate', false, BooleanInput),
    new PropertySchema('locationValue', 'Toronto, ON, CA', TextInput),
    new PropertySchema('suggestedLocationList', [
      NeverEatAlone.CityProvince.defaultLocation(),
      new NeverEatAlone.CityProvince(2, 'Ottawa', 'ON', 'CA')], ArrayInput(
      new PropertySchema('CityProvince',
      NeverEatAlone.CityProvince.defaultLocation(), CityProvinceInput))),
    new PropertySchema('isLanguagePrivate', false, BooleanInput),
    new PropertySchema('languageValue', '', TextInput),
    new PropertySchema('suggestedLanguageList', [new NeverEatAlone.Language(1,
      'en', 'English'), new NeverEatAlone.Language(2, 'es','Spanish'),
      new NeverEatAlone.Language(3, 'zh', 'Mandarin'),
      new NeverEatAlone.Language(4, 'fa', 'Farsi'),
      new NeverEatAlone.Language(5, 'de', 'German'),
      new NeverEatAlone.Language(6, 'pl', 'Polish')], ArrayInput(
      new PropertySchema('language', new NeverEatAlone.Language(1, 'en',
      'English'), LanguageInput))),
    new PropertySchema('selectedLanguageList', [new NeverEatAlone.Language(1,
      'en', 'English')], ArrayInput(
      new PropertySchema('language', new NeverEatAlone.Language(1, 'en',
      'English'), LanguageInput))),
    new PropertySchema('biographyValue', '', TextInput),
    new PropertySchema('isBiographyPrivate', false, BooleanInput),
    new PropertySchema('cuisineValue', '', TextInput),
    new PropertySchema('suggestedCuisineList', [new NeverEatAlone.Cuisine(1,
      'French', 'blue'), new NeverEatAlone.Cuisine(4, 'Steak', 'yellow'),
      new NeverEatAlone.Cuisine(5, 'Japanese', 'pink'),
      new NeverEatAlone.Cuisine(6, 'Persian', 'Salmon'),
      new NeverEatAlone.Cuisine(7, 'Middle Eastern', 'HotPink'),
      new NeverEatAlone.Cuisine(8, 'Jamaican', 'LemonChiffon')], ArrayInput(
      new PropertySchema('cuisine', new NeverEatAlone.Cuisine(1, 'French',
      'blue'), CuisineInput))),
    new PropertySchema('selectedCuisineList', [new NeverEatAlone.Cuisine(4,
      'Steak', 'PaleGreen'), new NeverEatAlone.Cuisine(3, 'Seafood',
      'Plum')], ArrayInput(new PropertySchema('cuisine',
      new NeverEatAlone.Cuisine(1, 'French', 'Lavender'), CuisineInput))),
    new PropertySchema('isCuisinePrivate', false, BooleanInput),
    new PropertySchema('isFacebookPrivate', false, BooleanInput),
    new PropertySchema('isTwitterPrivate', false, BooleanInput),
    new PropertySchema('isInstagramPrivate', false, BooleanInput),
    new PropertySchema('facebookLink', '', TextInput),
    new PropertySchema('twitterLink', '', TextInput),
    new PropertySchema('instagramLink', '', TextInput),
    new PropertySchema('facebookInputIsValid', true, BooleanInput),
    new PropertySchema('twitterInputIsValid', true, BooleanInput),
    new PropertySchema('instagramInputIsValid', true, BooleanInput),
    ], [
    new SignalSchema('onLocationInputChange', '', []),
    new SignalSchema('onLocationPrivacyClick', '', []),
    new SignalSchema('onLocationDropdownClick', '', []),
    new SignalSchema('onChangeProfileImageClick', '', []),
    new SignalSchema('onChangeBanner', '', []),
    new SignalSchema('onUpcomingEventPrivacyClick', '', []),
    new SignalSchema('onPastEventPrivacyClick', '', []),
    new SignalSchema('onLanguagePrivacyClick', '', []),
    new SignalSchema('onLanguageInputChange', '', []),
    new SignalSchema('onLanguageDropdownClick', '', []),
    new SignalSchema('onRemoveLanguageClick', '', []),
    new SignalSchema('onBiographyPrivacyClick', '', []),
    new SignalSchema('onBiographyInputChange', '', []),
    new SignalSchema('onCuisinePrivacyClick', '', []),
    new SignalSchema('onCuisineInputChange', '', []),
    new SignalSchema('onCuisineDropdownClick', '', []),
    new SignalSchema('onRemoveCuisineClick', '', []),
    new SignalSchema('onFacebookPrivacyClick', '', []),
    new SignalSchema('onFacebookInputChange', '', []),
    new SignalSchema('onTwitterPrivacyClick', '', []),
    new SignalSchema('onTwitterInputChange', '', []),
    new SignalSchema('onInstagramPrivacyClick', '', []),
    new SignalSchema('onInstagramInputChange', '', []),
    new SignalSchema('onSaveClick', '', []),
    new SignalSchema('onCancelClick', '', [])
  ], NeverEatAlone.EditProfilePage);
  const publicButtonSchema = new ComponentSchema('PublicButton', [], [
    new SignalSchema('onClick', '', [])], NeverEatAlone.PublicButton);
  const privateButtonSchema = new ComponentSchema('PrivateButton', [], [
    new SignalSchema('onClick', '', [])], NeverEatAlone.PrivateButton);
  const locationInputFieldSchema = new ComponentSchema('LocationInputField',
    [new PropertySchema('value', '', TextInput),
    new PropertySchema('placeholder', '', TextInput),
    new PropertySchema('hasError', false, BooleanInput),
    new PropertySchema('disabled', false, BooleanInput)],
    [new SignalSchema('onClick', '', [])], NeverEatAlone.LocationInputField);
  const textareaWithCounterSchema = new ComponentSchema('TextareaWithCounter',
    [new PropertySchema('maxCount', 280, NumberInput),
    new PropertySchema('disabled', false, BooleanInput),
    new PropertySchema('hasError', false, BooleanInput),
    new PropertySchema('placeholder', 'Hello everyone! My name is Casper and I \
      would love to meet you all AND TRY NEW FOOD.', TextInput),
    new PropertySchema('value', '', TextInput)],
    [new SignalSchema('onValueChange', '', [])],
    NeverEatAlone.TextareaWithCounter);
  const saveCancelStickyMenuSchema = new ComponentSchema(
    'SaveCancelStickyMenu', [
      new PropertySchema('displayMode', NeverEatAlone.DisplayMode.MOBILE,
      DisplayModeInput)
    ],[
    new SignalSchema('onSaveClick', '', []),
    new SignalSchema('onCancelClick', '', [])],
    NeverEatAlone.SaveCancelStickyMenu);
  const diningEventPageSchema = new ComponentSchema('DiningEventPage', [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput),
    new PropertySchema('eventColor', '#BF408D', TextInput),
    new PropertySchema('eventFee', 3.00 , NumberInput),
    new PropertySchema('coverImageSrc', 'resources/images/15.jpg', TextInput),
    new PropertySchema('title', 'Let’s go to Mapo Korean BBQ', TextInput),
    new PropertySchema('restaurant', new NeverEatAlone.Restaurant(1,
      'Mapo Korean BBQ', new Date(), 1, 'Cozy BBQ place in the west end.',
      'Go upstairs.', '6476412589', NeverEatAlone.PriceRange.MODERATELY_PRICED,
      [new NeverEatAlone.Cuisine(1, 'Korean', '#E5FFD8'),
      new NeverEatAlone.Cuisine(2, 'BBQ', '#FFFDD8')], 'www.mapobbq.com'),
      RestaurantInput),
    new PropertySchema('dressCode', NeverEatAlone.DressCode.BUSINESS_CASUAL,
      DressCodeInput),
    new PropertySchema('seating', NeverEatAlone.Seating.STANDARD, SeatingInput),
    new PropertySchema('location', new NeverEatAlone.Location(2, '25 Bay St',
      '', 'Toronto', 'ON', 'CA', 'M4W 4W4', 'Financial District'),
      LocationInput),
    new PropertySchema('reservationName', 'NEA Group', TextInput),
    new PropertySchema('startTime', new Date(2022, 11, 20, 18, 30),
      DateTimeInput),
    new PropertySchema('endTime', new Date(2022, 11, 20, 23, 30),
      DateTimeInput),
    new PropertySchema('attendeeList', [
      new NeverEatAlone.Attendee(1, 1,
      'Mark', 0, NeverEatAlone.AttendeeStatus.GOING,
      'resources/images/profileguy5.jpeg', new Date()),
      new NeverEatAlone.Attendee(2, 1,
      'Mark', 0, NeverEatAlone.AttendeeStatus.GOING,
      'resources/images/profileguy5.jpeg', new Date()),
      new NeverEatAlone.Attendee(3, 1,
      'Mark', 0, NeverEatAlone.AttendeeStatus.GOING,
      'resources/images/profileguy5.jpeg', new Date()),
      new NeverEatAlone.Attendee(4, 1,
      'Mark', 0, NeverEatAlone.AttendeeStatus.GOING,
      'resources/images/profileguy5.jpeg', new Date()),
      new NeverEatAlone.Attendee(5, 1,
      'Mark', 0, NeverEatAlone.AttendeeStatus.GOING,
      'resources/images/profileguy5.jpeg', new Date()),
      new NeverEatAlone.Attendee(6, 1,
      'Mark', 0, NeverEatAlone.AttendeeStatus.GOING,
      'resources/images/profileguy5.jpeg', new Date()),
      new NeverEatAlone.Attendee(7, 1,
      'Mark', 0, NeverEatAlone.AttendeeStatus.GOING,
      'resources/images/profileguy5.jpeg', new Date()),
      new NeverEatAlone.Attendee(8, 1,
      'Mark', 0, NeverEatAlone.AttendeeStatus.GOING,
      'resources/images/profileguy5.jpeg', new Date()),
      new NeverEatAlone.Attendee(9, 1,
      'Mark', 0, NeverEatAlone.AttendeeStatus.GOING,
      'resources/images/profileguy5.jpeg', new Date()),
      new NeverEatAlone.Attendee(10, 1,
      'Mark', 0, NeverEatAlone.AttendeeStatus.GOING,
      'resources/images/profileguy5.jpeg', new Date())
    ], ArrayInput(new PropertySchema(
      'attendee', new NeverEatAlone.Attendee(Date.now(), 1,
      'Mark', 0, NeverEatAlone.AttendeeStatus.GOING,
      'resources/images/profileguy5.jpeg', new Date()), AttendeeInput))),
    new PropertySchema('totalCapacity', 10, NumberInput),
    new PropertySchema('description', 'In keeping with Japanese tradition, \
      Yukashi considers the various flavours and aromas of seasonal vegetables \
      when deciding what will make it onto our customers ‘plates, and tickle \
      their palates. Whether with our delicious main dishes, or our exciting \
      sake/ appetizer pairings, customers will find that locally grown \
      ingredients complement carefully chosen ingredients from Japan to make \
      an authentic Japanese experience with a subtle Canadian twist. This is \
      one of my favourite sushi places in Toronto and I hope you find this \
      experience memorable too! Please note, counter seating is only available \
      on weekends.', TextInput),
    new PropertySchema('isRSVPOpen', true, BooleanInput),
    new PropertySchema('isLoggedIn', true, BooleanInput),
    new PropertySchema('isGoing', true, BooleanInput)
    ],
    [new SignalSchema('onJoinEvent', '', []),
    new SignalSchema('onRemoveSeat', '', [])
    ], NeverEatAlone.DiningEventPage);
  const seeAllButtonSchema = new ComponentSchema('SeeAllButton', [], [
    new SignalSchema('onClick', '', [])], NeverEatAlone.SeeAllButton);
  const seeLessButtonSchema = new ComponentSchema('SeeLessButton', [], [
    new SignalSchema('onClick', '', [])], NeverEatAlone.SeeLessButton);
  
  const creditCardDropdownMenu = new ComponentSchema('CreditCardDropdownMenu',
    [new PropertySchema('cardList', [
    new NeverEatAlone.PaymentCard(2, 4567890123456789, 'Jlo Jlo', 12, 2026,
      2345, 'M3E 5G6', NeverEatAlone.CreditCardType.VISA),
    new NeverEatAlone.PaymentCard(151, 4567890123456789, 'Jlo Jlo', 12, 2026,
      2345, 'M3E 5G6', NeverEatAlone.CreditCardType.AMEX),
    new NeverEatAlone.PaymentCard(1, 4567890123456789, 'Jlo Jlo', 12, 2026,
      2345, 'M3E 5G6', NeverEatAlone.CreditCardType.VISA),
    new NeverEatAlone.PaymentCard(21,4567890123456789, 'Jlo Jlo', 12, 2026,
      2345, 'M3E 5G6', NeverEatAlone.CreditCardType.MASTERCARD),
    ], ArrayInput(new PropertySchema(
      'paymentCard', new NeverEatAlone.PaymentCard(3, 4567890123456789,
      'Jlo Jlo', 12, 2026, 2345, 'M3E 5G6', NeverEatAlone.CreditCardType.VISA),
      PaymentCardInput))),
    new PropertySchema('defaultCard', new NeverEatAlone.PaymentCard(4,
      4567890123456789, 'Jlo Jlo', 12, 2026, 2345, 'M3E 5G6',
      NeverEatAlone.CreditCardType.VISA), PaymentCardInput),
    ], [new SignalSchema('onCardClick', '', [])],
    NeverEatAlone.CreditCardDropdownMenu);
  const primaryButtonWithArrowSchema = new ComponentSchema(
    'PrimaryButtonWithArrow', [new PropertySchema('iconStyle', {}, CSSInput),
    new PropertySchema('style', {}, CSSInput),
    new PropertySchema('labelStyle', {}, CSSInput),
    new PropertySchema('label', 'Primary Button', TextInput),
    new PropertySchema('disabled', false, BooleanInput)],
    [new SignalSchema('onClick', '', [])],
    NeverEatAlone.PrimaryTextButtonWithArrow);
  const secondaryButtonWithArrowSchema = new ComponentSchema(
    'SecondaryButtonWithArrow', [new PropertySchema('iconStyle', {}, CSSInput),
    new PropertySchema('style', {}, CSSInput),
    new PropertySchema('labelStyle', {}, CSSInput),
    new PropertySchema('label', 'Secondary Button', TextInput),
    new PropertySchema('disabled', false, BooleanInput)],
    [new SignalSchema('onClick', '', [])],
    NeverEatAlone.SecondaryTextButtonWithArrow);
  const payPalButtonSchema = new ComponentSchema('PayPalButton', [
    new PropertySchema('style', {}, CSSInput)
  ],
    [new SignalSchema('onClick', '', [])], NeverEatAlone.PayPalButton);
  const applePayButtonSchema = new ComponentSchema('ApplePayButton', [
    new PropertySchema('style', {}, CSSInput)
  ],
    [new SignalSchema('onClick', '', [])], NeverEatAlone.ApplePayButton);
  const googlePayButtonSchema = new ComponentSchema('GooglePayButton', [
    new PropertySchema('style', {}, CSSInput)
  ],
    [new SignalSchema('onClick', '', [])], NeverEatAlone.GooglePayButton);
  const paymentCardInputFieldSchema = new ComponentSchema(
    'PaymentCardInputField', [
      new PropertySchema('style', {}, CSSInput),
      new PropertySchema('placeholder', '', TextInput),
      new PropertySchema('disabled', false, BooleanInput),
      new PropertySchema('hasError', false, BooleanInput)], [],
      NeverEatAlone.PaymentCardInputField);
  const removeSeatModalSchema = new ComponentSchema('RemoveSeatModal', [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.MOBILE,
      DisplayModeInput),
    new PropertySchema('refundAmount', 5.00, NumberInput),
    new PropertySchema('refundDescription', 'You will be refunded this amount \
      within 10 business days or earlier on your original method of payment.',
      TextInput)
  ], [
    new SignalSchema('onRemoveSeat', '', []),
    new SignalSchema('onCancel', '', [])
  ], NeverEatAlone.RemoveSeatModal);
  const settingsPageSchema = new ComponentSchema('SettingsPage', [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.MOBILE,
      DisplayModeInput),
    new PropertySchema('linkedSocialAccounts', [
      new NeverEatAlone.SocialAccount(NeverEatAlone.SocialAccountType.GOOGLE,
        'token', 'lucy@gmail.com'),
      new NeverEatAlone.SocialAccount(NeverEatAlone.SocialAccountType.FACEBOOK,
        'token', 'lucy@gmail.com')
    ], ArrayInput(
      new PropertySchema('SocialAccount', new NeverEatAlone.SocialAccount(
        NeverEatAlone.SocialAccountType.GOOGLE, 'token', 'lucy@gmail.com'),
      SocialAccountInput))),
    new PropertySchema('displayName', 'Arthur', TextInput),
    new PropertySchema('profileId', 17826, NumberInput),
    new PropertySchema('email', 'shshs@gmail.com', TextInput),
    new PropertySchema('password', 'dsfdsf', TextInput),
    new PropertySchema('isNewEvents', true, BooleanInput),
    new PropertySchema('isEventJoined', true, BooleanInput),
    new PropertySchema('isEventReminders', true, BooleanInput),
    new PropertySchema('isChanges', true, BooleanInput),
    new PropertySchema('isSomeoneJoined', true, BooleanInput),
    new PropertySchema('isFoodieAcceptedInvite', true, BooleanInput),
    new PropertySchema('isAnnouncement', true, BooleanInput),
    new PropertySchema('defaultCard', new NeverEatAlone.PaymentCard(12,
      4567890123456789, 'Jlo Jlo', 10, 2022, 2345, 'M3E 5G6',
      NeverEatAlone.CreditCardType.VISA), PaymentCardInput),
    new PropertySchema('otherPaymentCards', [
      new NeverEatAlone.PaymentCard(14, 4567890123456789, 'Jlo Jlo', 8, 2022,
        2345, 'M3E 5G6', NeverEatAlone.CreditCardType.VISA),
      new NeverEatAlone.PaymentCard(15, 4567890123456789, 'ahs jdfj', 11, 2022,
        9524, 'M3E 5G6', NeverEatAlone.CreditCardType.AMEX),
      new NeverEatAlone.PaymentCard(16, 4567890123456789, 'allo gil', 11, 2023,
        7458, 'M3E 3T7', NeverEatAlone.CreditCardType.MASTERCARD)
    ], ArrayInput(
      new PropertySchema('PaymentCard', new NeverEatAlone.PaymentCard(17,
        4567890123456789, 'Jlo Jlo', 12, 2026, 2345, 'M3E 5G6',
        NeverEatAlone.CreditCardType.VISA), PaymentCardInput))),
    new PropertySchema('paymentRecords', [
      new NeverEatAlone.PaymentRecord(
        2, new NeverEatAlone.EventCardSummary(3, 'best french restaurant',
        new Date(2022, 6, 12, 19, 0, 0), new Date(2021, 6, 12, 23, 0, 0),
        'Le Select', NeverEatAlone.PriceRange.EXPENSIVE, [],
        'resources/images/3.jpg', 12, 12, true, 'yellow'), [
        new NeverEatAlone.PaymentTransaction(999, 'Event Fee', 78.00,
          NeverEatAlone.PaymentMethod.CREDIT_CARD,
          NeverEatAlone.CreditCardType.VISA, '1458', 'Event fee', new Date(
          2022, 2, 1, 23, 15), new Date(2022, 2, 1, 23, 15),
          NeverEatAlone.PaymentStatus.CHARGED, 0.13)
        ]),
      new NeverEatAlone.PaymentRecord(
        3, new NeverEatAlone.EventCardSummary(2,
        'Thanksgiving dinner together!', new Date(2022, 6, 12, 19, 0, 0),
        new Date(2021, 6, 12, 23, 0, 0), 'Le Select',
        NeverEatAlone.PriceRange.EXPENSIVE, [], 'resources/images/2.jpg', 12,
        12, true, 'yellow'), [
          new NeverEatAlone.PaymentTransaction(58, 'Event Fee', 9.99,
            NeverEatAlone.PaymentMethod.CREDIT_CARD,
            NeverEatAlone.CreditCardType.MASTERCARD, '1458', 'Event fee',
            new Date(2022, 10, 1, 23, 15), new Date(2022, 10, 1, 23, 15),
            NeverEatAlone.PaymentStatus.CHARGED, 0.13),
          new NeverEatAlone.PaymentTransaction(59, 'Event Fee', 50,
            NeverEatAlone.PaymentMethod.CREDIT_CARD,
            NeverEatAlone.CreditCardType.MASTERCARD, '1458', 'Cancellation fee',
            new Date(2022, 10, 10, 23, 15), new Date(2022, 10, 10, 23, 15),
            NeverEatAlone.PaymentStatus.WILL_BE_CHARGED, 0.13)
        ]),
      new NeverEatAlone.PaymentRecord(
        4, new NeverEatAlone.EventCardSummary(1,
        "Let's have fun at the buffet...", new Date(2022, 6, 12, 19, 0, 0),
        new Date(2021, 6, 12, 23, 0, 0), 'Le Select',
        NeverEatAlone.PriceRange.EXPENSIVE, [],
        'resources/images/1.jpg', 12, 12, true, 'yellow'), [
          new NeverEatAlone.PaymentTransaction(909, 'Event Fee', 7.25,
            NeverEatAlone.PaymentMethod.CREDIT_CARD,
            NeverEatAlone.CreditCardType.AMEX, '1458', 'Event fee', new Date(
            2022, 10, 1, 23, 15), new Date(2022, 10, 1, 23, 15),
            NeverEatAlone.PaymentStatus.CHARGED, 0.13),
          new NeverEatAlone.PaymentTransaction(90, 'Event Fee', 7.25,
            NeverEatAlone.PaymentMethod.CREDIT_CARD,
            NeverEatAlone.CreditCardType.AMEX, '1458', 'Event fee',
            new Date(2022, 10, 15, 20, 15), new Date(2022, 10, 15, 20, 15),
            NeverEatAlone.PaymentStatus.REFUNDED, 0.13)
        ])
    ], ArrayInput(
      new PropertySchema('paymentRecord', new NeverEatAlone.PaymentRecord(
        1, new NeverEatAlone.EventCardSummary(1, 'best french restaurant',
        new Date(2022, 6, 12, 19, 0, 0), new Date(2021, 6, 12, 23, 0, 0),
        'Le Select', NeverEatAlone.PriceRange.EXPENSIVE, [],
        'resources/images/5.jpg', 12, 12, true, 'yellow'), [
          new NeverEatAlone.PaymentTransaction(14, 'Event Fee', 26.54,
            NeverEatAlone.PaymentMethod.CREDIT_CARD,
            NeverEatAlone.CreditCardType.VISA, '1458', 'Event fee',
            new Date(2022, 10, 1, 23, 15), new Date(2022, 10, 1, 23, 15),
            NeverEatAlone.PaymentStatus.CHARGED, 0.13)
        ]),
        PaymentRecordInput)
    )),
    new PropertySchema('addCardErrorMessage', '', TextInput),
    new PropertySchema('addCardErrorCode',
      NeverEatAlone.AddCreditCardForm.ErrorCode.NONE,
      AddCreditCardFormErrorCodeInput),
    new PropertySchema('updateCardErrorMessage', '', TextInput),
    new PropertySchema('updateCardErrorCode',
      NeverEatAlone.CardDetailsForm.ErrorCode.NONE,
      CardDetailsFormErrorCodeInput),
    ], [
      new SignalSchema('onAddCard', '', []),
      new SignalSchema('onUpdateCard', '', []),
      new SignalSchema('onMakeDefaultCard', '', []),
      new SignalSchema('onDeleteCard', '', []),
      new SignalSchema('onNewEventsToggle', '', []),
      new SignalSchema('onEventJoinedToggle', '', []),
      new SignalSchema('onEventRemindersToggle', '', []),
      new SignalSchema('onChangesToggle', '', []),
      new SignalSchema('onSomeoneJoinedToggle', '', []),
      new SignalSchema('onFoodieAcceptedInviteToggle', '', []),
      new SignalSchema('onAnnouncementToggle', '', []),
      new SignalSchema('onGoogleClick', '', []),
      new SignalSchema('onFacebookClick', '', []),
      new SignalSchema('onRemoveLinkedAccount', '', []),
      new SignalSchema('onEditDisplayNameClick', '', []),
      new SignalSchema('onEditEmailClick', '', []),
      new SignalSchema('onEditPasswordClick', '', []),
      new SignalSchema('onDeactivateAccountSubmit', '', []),
      new SignalSchema('onDeleteAccountPage', '', []),
      new SignalSchema('onSubmitDeleteAccount', '', []),
      new SignalSchema('onPrintClick', '', []),
      new SignalSchema('onDownloadPdfClick', '', []),
      new SignalSchema('onPaymentReceiptBackClick', '', []),
      new SignalSchema('onAccountInformationBackClick', '', []),
      new SignalSchema('onHelpButtonClick', '', []),
      new SignalSchema('onSubmitHelpEmail', '', []),
      new SignalSchema('onEmailReceiptClick', '', []),
      new SignalSchema('activateEmailButton', '', []),
      new SignalSchema('onDeactivateAccountPageClick', '', []),
      new SignalSchema('onDeleteCheckboxClick', '', []),
      new SignalSchema('onDeletePasswordChange', '', [])
      ], NeverEatAlone.SettingsPage);
  const linkSocialMediaButtonSchema = new ComponentSchema(
    'LinkSocialMediaButton',
    [new PropertySchema('accountType',
      NeverEatAlone.SocialAccountType.FACEBOOK,
      SocialAccountTypeInput),
    new PropertySchema('account', '', TextInput),
    new PropertySchema('disabled', false, BooleanInput)], [
    new SignalSchema('onClick', '', [])
    ],
    NeverEatAlone.LinkSocialAccountButton);
  const toggleButtonSchema = new ComponentSchema('ToggleButton', [
    new PropertySchema('style', {}, CSSInput),
    new PropertySchema('checked', true, BooleanInput)
  ], [new SignalSchema('onClick', '', [])], NeverEatAlone.ToggleButton);
  const paymentReceiptModalSchema = new ComponentSchema('PaymentReceiptModal',
    [new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput),
    new PropertySchema('paymentRecord', new NeverEatAlone.PaymentRecord(
      1, new NeverEatAlone.EventCardSummary(1, 'best french restaurant',
      new Date(2022, 6, 12, 19, 0, 0), new Date(2021, 6, 12, 23, 0, 0),
      'Le Select', NeverEatAlone.PriceRange.EXPENSIVE, [],
      'resources/images/5.jpg', 12, 12, true, '#BF408D'), [
        new NeverEatAlone.PaymentTransaction(14, 'Event Fee', 26.54,
          NeverEatAlone.PaymentMethod.CREDIT_CARD,
          NeverEatAlone.CreditCardType.VISA, '1458', 'Event fee',
          new Date(2022, 10, 1, 23, 15), new Date(2022, 10, 1, 23, 15),
          NeverEatAlone.PaymentStatus.CHARGED, 0.13)
      ]), PaymentRecordInput)],
    [new SignalSchema('onClose', '', []),
      new SignalSchema('onPrintClick', '', []),
      new SignalSchema('onDownloadPdfClick', '', []),
      new SignalSchema('onSendEmailClick', '', []),
      new SignalSchema('onHelpClick', '', [])],
    NeverEatAlone.PaymentReceiptModal);
  const helpPageSchema = new ComponentSchema('HelpPage', [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput)], [new SignalSchema('onInviteAFoodieClick', '', [])],
    NeverEatAlone.HelpPage);
  const cookiesPolicyPageSchema = new ComponentSchema('CookiesPolicyPage', [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput)], [], NeverEatAlone.CookiesPolicyPage);
  const termsOfUSePageSchema = new ComponentSchema('TermsOfUsePage', [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput)], [], NeverEatAlone.TermsOfUsePage);
  const privacyPolicyPageSchema = new ComponentSchema('PrivacyPolicyPage', [
    new PropertySchema('displayMode', NeverEatAlone.DisplayMode.DESKTOP,
      DisplayModeInput)], [], NeverEatAlone.PrivacyPolicyPage);
  return [
    accentTextButtonSchema,
    albumCardSchema,
    albumSummarySchema,
    applePayButtonSchema,
    avatarWithCheckMarkSchema,
    checkBoxSchema,
    closeButtonSchema,
    cookiesPolicyPageSchema,
    creditCardDropdownMenu,
    diningEventCardSchema,
    diningEventPageSchema,
    editProfilePageSchema,
    emailInputFieldSchema,
    exploreEventsSummaryEmptySchema,
    exploreEventsSummarySchema,
    facebookLogInButtonSchema,
    footerSchema,
    forgotPasswordLinkSentPageSchema,
    forgotPasswordPageSchema,
    googleLogInButtonSchema,
    googlePayButtonSchema,
    headerLoggedInSchema,
    headerNotLoggedInSchema,
    helpPageSchema,
    heroLoggedInNoEventSchema,
    heroLoggedInWithEventSchema,
    heroNotLoggedInSchema,
    homePageLoggedInSchema,
    homePageNotLoggedSchema,
    inputFieldSchema,
    invertedSecondaryTextButtonSchema,
    joinModalSchema,
    JoinRequestSentModalSchema,
    linkSocialMediaButtonSchema,
    locationInputFieldSchema,
    logInModalSchema,
    logoSchema,
    nameInputFieldSchema,
    partnerWithUsSummarySchema,
    paymentCardInputFieldSchema,
    paymentReceiptModalSchema,
    payPalButtonSchema,
    primaryButtonWithArrowSchema,
    primaryTextButtonSchema,
    privacyPolicyPageSchema,
    privateButtonSchema,
    profileBoxSchema,
    profilePageSchema,
    profilePastEventsSchema,
    profileSetUpPageSchema,
    profileUpcomingEventsSchema,
    publicButtonSchema,
    removeSeatModalSchema,
    resetPasswordPage,
    saveCancelStickyMenuSchema,
    secondaryButtonNavLink,
    secondaryButtonWithArrowSchema,
    secondaryTextLinkButton,
    seeAllButtonSchema,
    seeLessButtonSchema,
    settingsPageSchema,
    showAllButtonSchema,
    showLessButtonSchema,
    signUpPageSchema,
    termsOfUSePageSchema,
    textareaWithCounterSchema,
    toggleButtonSchema,
    userUpcomingEventsSummarySchema,
    whiteNavLinkSchema];
}
