import * as NeverEatAlone from 'never_eat_alone';

export class DemoSettingsPageModel extends NeverEatAlone.SettingsPageModel {
  constructor(displayName: string, linkedSocialAccounts:
      NeverEatAlone.SocialAccount[], profileId: number, email: string,
      password: string, isNewEventsNotificationOn: boolean,
      isEventJoinedNotificationOn: boolean, isEventRemindersNotificationOn:
      boolean, isChangesNotificationOn: boolean,
      isFoodieAcceptedInviteNotificationOn: boolean,
      isAnnouncementNotificationOn: boolean, defaultCard:
      NeverEatAlone.PaymentCard, paymentCards: NeverEatAlone.PaymentCard[],
      paymentRecords: NeverEatAlone.PaymentRecord[]) {
    super();
    this._displayName = displayName;
    this._linkedSocialAccounts = linkedSocialAccounts;
    this._profileId = profileId;
    this._email = email;
    this._password = password;
    this._isNewEventsNotificationOn = isNewEventsNotificationOn;
    this._isEventJoinedNotificationOn = isEventJoinedNotificationOn;
    this._isEventRemindersNotificationOn = isEventRemindersNotificationOn;
    this._isChangesNotificationOn = isChangesNotificationOn;
    this._isFoodieAcceptedInviteNotificationOn =
      isFoodieAcceptedInviteNotificationOn;
    this._isAnnouncementNotificationOn = isAnnouncementNotificationOn;
    this._defaultCard = defaultCard;
    this._paymentCards = paymentCards;
    this._paymentRecords = paymentRecords;
  }

  public async load(): Promise<void> {
    return;
  }

  public get displayName(): string {
    return this._displayName;
  }

  public get linkedSocialAccounts(): NeverEatAlone.SocialAccount[] {
    return this._linkedSocialAccounts;
  }

  public get profileId(): number {
    return this._profileId;
  }

  public get email(): string {
    return this._email;
  }

  public get password(): string {
    return this._password;
  }

  public get isNewEventsNotificationOn(): boolean {
    return this._isNewEventsNotificationOn;
  }

  public get isEventJoinedNotificationOn(): boolean {
    return this._isEventJoinedNotificationOn;
  }

  public get isEventRemindersNotificationOn(): boolean {
    return this._isEventRemindersNotificationOn;
  }

  public get isChangesNotificationOn(): boolean {
    return this._isChangesNotificationOn;
  }

  public get isSomeoneJoinedNotificationOn(): boolean {
    return this._isSomeoneJoinedNotificationOn;
  }

  public get isFoodieAcceptedInviteNotificationOn(): boolean {
    return this._isFoodieAcceptedInviteNotificationOn;
  }

  public get isAnnouncementNotificationOn(): boolean {
    return this._isAnnouncementNotificationOn;
  }

  public get defaultCard(): NeverEatAlone.PaymentCard {
    return this._defaultCard;
  }

  public get paymentCards(): NeverEatAlone.PaymentCard[] {
    return this._paymentCards;
  }

  public get paymentRecords(): NeverEatAlone.PaymentRecord[] {
    return this._paymentRecords;
  }

  public async addCard(cardNumber: number, nameOnCard: string, month: number,
      year: number, securityCode: number, zipcode: string): Promise<
      NeverEatAlone.PaymentCard> {
    const newCard = new NeverEatAlone.PaymentCard(Date.now(), cardNumber,
      nameOnCard, month, year, securityCode, zipcode,
      NeverEatAlone.CreditCardType.VISA);
    this._paymentCards = [...this._paymentCards, newCard];
    return newCard;
  }

  public async updateCard(newCard: NeverEatAlone.PaymentCard,
      isMarkedAsDefault: boolean): Promise<NeverEatAlone.PaymentCard> {
    if (newCard.id === -1) {
      return NeverEatAlone.PaymentCard.noCard();
    }
    if (isMarkedAsDefault) {
      this._defaultCard = newCard;
    }
    return newCard;
  }

  public async deleteCard(cardId: number): Promise<void> {
    if (cardId === -1) {
      return;
    }
    const temp = [...this._paymentCards];
    this._paymentCards = temp.filter((paymentCard) => paymentCard.id !==
      cardId);
    if (this._defaultCard.id === cardId) {
      this._defaultCard = NeverEatAlone.PaymentCard.noCard();
    }
    return;
  }

  public async toggleNewEventsNotification(): Promise<void> {
    this._isNewEventsNotificationOn = !this._isNewEventsNotificationOn;
  }

  public async toggleEventJoinedNotification(): Promise<void> {
    this._isEventJoinedNotificationOn = !this._isEventJoinedNotificationOn;
  }

  public async toggleEventRemindersNotification(): Promise<void> {
    this._isEventRemindersNotificationOn =
      !this._isEventRemindersNotificationOn;
  }

  public async toggleChangesNotification(): Promise<void> {
    this._isChangesNotificationOn = !this._isChangesNotificationOn;
  }

  public async toggleSomeoneJoinedNotification(): Promise<void> {
    this._isSomeoneJoinedNotificationOn = !this._isSomeoneJoinedNotificationOn;
  }

  public async toggleFoodieAcceptedInviteNotification(): Promise<void> {
    this._isFoodieAcceptedInviteNotificationOn =
      !this._isFoodieAcceptedInviteNotificationOn;
  }

  public async toggleAnnouncementNotification(): Promise<void> {
    this._isAnnouncementNotificationOn = !this._isAnnouncementNotificationOn;
  }

  public async emailReceipt(paymentRecord: NeverEatAlone.PaymentRecord):
      Promise<void> {
    return;
  }

  public async SubmitHelpEmail(receiptId: number, message: string): Promise<
      void> {
    return;
  }

  public async deleteAccount(account: NeverEatAlone.User, password: string
      ): Promise<NeverEatAlone.User> {
    if (account && account.id !== -1 && password) {
      return account;
    }
    return NeverEatAlone.User.makeGuest();
  }

  public async deactivateAccount(accountId: number): Promise<void> {
    return;
  }

  private _displayName: string;
  private _linkedSocialAccounts: NeverEatAlone.SocialAccount[];
  private _profileId: number;
  private _email: string;
  private _password: string;
  private _isNewEventsNotificationOn: boolean;
  private _isEventJoinedNotificationOn: boolean;
  private _isEventRemindersNotificationOn: boolean;
  private _isChangesNotificationOn: boolean;
  private _isSomeoneJoinedNotificationOn: boolean;
  private _isFoodieAcceptedInviteNotificationOn: boolean;
  private _isAnnouncementNotificationOn: boolean;
  private _defaultCard: NeverEatAlone.PaymentCard;
  private _paymentCards: NeverEatAlone.PaymentCard[];
  private _paymentRecords: NeverEatAlone.PaymentRecord[];
}