import { css, StyleSheet } from 'aphrodite';
import imageCompression from 'browser-image-compression';
import * as React from 'react';
import { CloseButton, InputField, InputFieldWithIcon,
  InvertedSecondaryTextButton, Modal, PublicButton, PrivateButton, RedNavLink,
  SaveCancelStickyMenu, TextareaWithCounter } from '../../components';
import { CoverImage, Cuisine, DisplayMode, Language, UserProfileImage } from
  '../../definitions';
import { ChooseBannerModal } from '../../modals';

interface Properties {
  displayMode: DisplayMode;
  displayName: string;
  profileId: number;

  /** The source address of the user's cover image. */
  coverImage: CoverImage;

  coverImageList: CoverImage[];

  /** The source address of the user's profile image. */
  profileImage: UserProfileImage;

  /** Whether user's upcoming events section is private or public. */
  isUpcomingEventsPrivate: boolean;

  /** Whether user's past events section is private or public. */
  isPastEventsPrivate: boolean;

  /** Whether user's location information is private or public. */
  isLocationPrivate: boolean;

  /** The value entered in the location input field. */
  locationValue: string;

  /** Whether user's language information is private or public. */
  isLanguagePrivate: boolean;

  /** The value entered in the language input field. */
  languageValue: string;

  /** List of languages matched the language input value. */
  suggestedLanguageList: Language[];

  /** The list of languages that user selected. */
  selectedLanguageList: Language[];

  /** The value entered in the biography textarea. */
  biographyValue: string;

  /** Whether user's biography is private or public. */
  isBiographyPrivate: boolean;

  /** The value entered in the cuisine inputfield. */
  cuisineValue: string;

  /** The list of cuisines matched the cuisine input value. */
  suggestedCuisineList: Cuisine[];

  /** The list of cuisines that user selected. */
  selectedCuisineList: Cuisine[];

  /** Whether user's favorite cuisines are private or public. */
  isCuisinePrivate: boolean;

  /** Whether user's facebook profile link is private or public. */
  isFacebookPrivate: boolean;

  /** Whether user's twitter profile link is private or public. */
  isTwitterPrivate: boolean;

  /** Whether user's instagram profile link is private or public. */
  isInstagramPrivate: boolean;

  /** The value entered in the facebook link inputfield. */
  facebookLink: string;

  /** The value entered in the twitter link inputfield. */
  twitterLink: string;

  /** The value entered in the instagram link inputfield. */
  instagramLink: string;

  /** Whether the facebook url input is valid or not. */
  facebookInputIsValid: boolean;

  /** Whether the twitter url input is valid or not. */
  twitterInputIsValid: boolean;

  /** Whether the instagram url input is valid or not. */
  instagramInputIsValid: boolean;

  isLocationValid: boolean;

  /** Indicates the location inputfield value changed. */
  onLocationInputChange: (newValue: string) => void;

  /** Indicates the location's privacy button is clicked. */
  onLocationPrivacyClick: () => void;

  /** Indicates the change profile image button is clicked. */
  onChangeProfileImageClick: (newImageFile: File) => void;

  /** Indicates the change banner modal's Done button is clicked. */
  onChangeBannerDone: (newImage: CoverImage) => void;

  /** Indicates the upcoming events's privacy button is clicked. */
  onUpcomingEventPrivacyClick: () => void;

  /** Indicates the past events's privacy button is clicked. */
  onPastEventPrivacyClick: () => void;

  /** Indicates the language's privacy button is clicked. */
  onLanguagePrivacyClick: () => void;

  /** Indicates the language inputfield value changed. */
  onLanguageInputChange: (newValue: string) => void;

  /** Indicates a language from the dropdwon is clicked. */
  onLanguageDropdownClick: (language: Language) => void;

  /** Indicates the close button on language tag is clicked. */
  onRemoveLanguageClick: (id: number) => void;

  /** Indicates the biography's privacy button is clicked. */
  onBiographyPrivacyClick: () => void;

  /** Indicates the biography textarea value changed. */
  onBiographyInputChange: (newValue: string) => void;

  /** Indicates the cuisine's privacy button is clicked. */
  onCuisinePrivacyClick: () => void;

  /** Indicates the cuisine input value changed. */
  onCuisineInputChange: (newValue: string) => void;

  /** Indicates a cuisine is clicked from the dropdown menu.  */
  onCuisineDropdownClick: (cuisine: Cuisine) => void;

  /** Indicates the close button on a cuisine tag is clicked. */
  onRemoveCuisineClick: (id: number) => void;

  /** Indicates the facebook's privacy button is clicked. */
  onFacebookPrivacyClick: () => void;

  /** Indicates the facebook link input value changed. */
  onFacebookInputChange: (newValue: string) => void;

  /** Indicates the twitter's privacy button is clicked. */
  onTwitterPrivacyClick: () => void;

  /** Indicates the twitter link input value changed. */
  onTwitterInputChange: (newValue: string) => void;

  /** Indicates the instagram's privacy button is clicked. */
  onInstagramPrivacyClick: () => void;

  /** Indicates the instagram link input value changed. */
  onInstagramInputChange: (newValue: string) => void;

  /** Indicates the save button is clicked. */
  onSaveClick: () => void;

  /** Indicates the cancel button is clicked. */
  onCancelClick: () => void;
}

interface State {
  isLanguageInputFocued: boolean;
  isLanguageDropdownDisplayed: boolean;
  isCuisineInputFocued: boolean;
  isCuisineDropdownDisplayed: boolean;
  isChangeBanner: boolean;
  newProfileImage: UserProfileImage;
}

/** Displays the edit profile page. */
export class EditProfilePage extends React.Component<Properties, State> {
  constructor(props: Properties) {
    super(props);
    this.state = {
      isLanguageDropdownDisplayed: false,
      isCuisineDropdownDisplayed: false,
      isLanguageInputFocued: false,
      isCuisineInputFocued: false,
      isChangeBanner: false,
      newProfileImage: UserProfileImage.default()
    };
    this._languageDropdownRef = React.createRef<HTMLDivElement>();
    this._cuisineDropdownRef = React.createRef<HTMLDivElement>();
  }

  public render(): JSX.Element {
    const chooseBannerModal = (this.state.isChangeBanner &&
      <Modal>
        <ChooseBannerModal
          displayMode={this.props.displayMode}
          selectedImage={this.props.coverImage}
          coverImageList={this.props.coverImageList}
          onDone={this.props.onChangeBannerDone}
          onClose={this.handleModalClose}
        />
      </Modal>);
    const { containerStyle, coverImageStyle, changeBannerButtonStyle,
        contentContainerStyle, imagePrivacyContainerStyle } = (() => {
      if (this.props.displayMode === DisplayMode.DESKTOP) {
        return {
          containerStyle: DESKTOP_CONTAINER_STYLE,
          coverImageStyle: DESKTOP_COVER_IMAGE_STYLE,
          changeBannerButtonStyle: DESKTOP_CHANGE_BANNER_BUTTON_STYLE,
          contentContainerStyle: DESKTOP_TABLET_CONTENT_CONTAINER_STYLE,
          imagePrivacyContainerStyle:
            DESKTOP_TABLET_IMAGE_PRIVACY_CONTAINER_STYLE
        };
      } else if (this.props.displayMode === DisplayMode.TABLET) {
        return {
          containerStyle: TABLET_CONTAINER_STYLE,
          coverImageStyle: TABLET_COVER_IMAGE_STYLE,
          changeBannerButtonStyle: MOBILE_TABLET_CHANGE_BANNER_BUTTON_STYLE,
          contentContainerStyle: DESKTOP_TABLET_CONTENT_CONTAINER_STYLE,
          imagePrivacyContainerStyle:
            DESKTOP_TABLET_IMAGE_PRIVACY_CONTAINER_STYLE
        };
      } else {
        return {
          containerStyle: MOBILE_CONTAINER_STYLE,
          coverImageStyle: MOBILE_COVER_IMAGE_STYLE,
          changeBannerButtonStyle: MOBILE_TABLET_CHANGE_BANNER_BUTTON_STYLE,
          contentContainerStyle: MOBILE_CONTENT_CONTAINER_STYLE,
          imagePrivacyContainerStyle: MOBILE_IMAGE_PRIVACY_CONTAINER_STYLE
        };
      }
    })();
    const upcomingEventsPrivacyButton = (this.props.isUpcomingEventsPrivate &&
      <PrivateButton onClick={this.props.onUpcomingEventPrivacyClick} /> ||
      <PublicButton onClick={this.props.onUpcomingEventPrivacyClick} />);
    const pastEventsPrivacyButton = (this.props.isPastEventsPrivate &&
      <PrivateButton onClick={this.props.onPastEventPrivacyClick} /> ||
      <PublicButton onClick={this.props.onPastEventPrivacyClick} />);
    const locationPrivacyButton = (this.props.isLocationPrivate &&
      <PrivateButton onClick={this.props.onLocationPrivacyClick} /> ||
      <PublicButton onClick={this.props.onLocationPrivacyClick} />);
    const languagesPrivacyButton = (this.props.isLanguagePrivate &&
      <PrivateButton onClick={this.props.onLanguagePrivacyClick} /> ||
      <PublicButton onClick={this.props.onLanguagePrivacyClick} />);
    const biographyPrivacyButton = (this.props.isBiographyPrivate &&
      <PrivateButton onClick={this.props.onBiographyPrivacyClick} /> ||
      <PublicButton onClick={this.props.onBiographyPrivacyClick} />);
    const cuisinesPrivacyButton = (this.props.isCuisinePrivate &&
      <PrivateButton onClick={this.props.onCuisinePrivacyClick} /> ||
      <PublicButton onClick={this.props.onCuisinePrivacyClick} />);
    const facebookPrivacyButton = (this.props.isFacebookPrivate &&
      <PrivateButton onClick={this.props.onFacebookPrivacyClick} /> ||
      <PublicButton onClick={this.props.onFacebookPrivacyClick} />);
    const twitterPrivacyButton = (this.props.isTwitterPrivate &&
      <PrivateButton onClick={this.props.onTwitterPrivacyClick} /> ||
      <PublicButton onClick={this.props.onTwitterPrivacyClick} />);
    const instagramPrivacyButton = (this.props.isInstagramPrivate &&
      <PrivateButton onClick={this.props.onInstagramPrivacyClick} /> ||
      <PublicButton onClick={this.props.onInstagramPrivacyClick} />);
    const languageInputFieldStyle = (this.state.isLanguageDropdownDisplayed &&
      INPUT_WITH_DROPDOWN_STYLE || INPUT_FIELD_STYLE);
    const cuisineInputFieldStyle = (this.state.isCuisineDropdownDisplayed &&
      INPUT_WITH_DROPDOWN_STYLE || INPUT_FIELD_STYLE);
    const languageDropdownRows = (() => {
      if (this.state.isLanguageDropdownDisplayed &&
          this.props.suggestedLanguageList &&
          this.props.suggestedLanguageList.length !== 0) {
        const rows = this.props.suggestedLanguageList.map(language => {
          return (
            <div
                tabIndex={0}
                key={language.id}
                style={DROPDOWN_ROW_STYLE}
                className={css(styles.dropdownRow)}
                onClick={() => this.handleLanguageClick(language)}
            >
              {language.name}
            </div>);
        });
        return rows;
      }
      return null;
    })();
    const languageDropdownStyle = (languageDropdownRows &&
      DROPDOWN_CONTAINER_STYLE || {});
    const selectedLanguages = (() => {
      if (this.props.selectedLanguageList &&
          this.props.selectedLanguageList.length !== 0) {
        const languageTags = [...this.props.selectedLanguageList].map(
            language => {
          return (
            <div key={language.id} style={SELECTED_OPTION_TAG_STYLE} >
              {language.name}
              <CloseButton
                displayMode={this.props.displayMode}
                onClick={() => this.props.onRemoveLanguageClick(language.id)}
              />
            </div>);
        });
        return (
          <div style={SELECTED_OPTIONS_ROW_CONTAINER_STYLE} >
            {languageTags}
          </div>);
      }
      return null;
    })();
    const selectedCuisines = (() => {
      if (this.props.selectedCuisineList &&
          this.props.selectedCuisineList.length !== 0) {
        const cuisineTags = [...this.props.selectedCuisineList].map(cuisine => {
          return (
            <div key={cuisine.id} style={SELECTED_OPTION_TAG_STYLE} >
              {cuisine.label}
              <CloseButton
                displayMode={this.props.displayMode}
                onClick={() => this.props.onRemoveCuisineClick(cuisine.id)}
              />
            </div>);
        });
        return (
          <div style={SELECTED_OPTIONS_ROW_CONTAINER_STYLE} >
            {cuisineTags}
          </div>);
      }
      return null;
    })();
    const cuisineDropdownRows = (() => {
      if (this.state.isCuisineDropdownDisplayed &&
          this.props.suggestedCuisineList &&
          this.props.suggestedCuisineList.length !== 0) {
        const rows = this.props.suggestedCuisineList.map(cuisine => {
          return (
            <div
                tabIndex={0}
                key={cuisine.id}
                style={DROPDOWN_ROW_STYLE}
                className={css(styles.dropdownRow)}
                onClick={() => this.handleCuisineClick(cuisine)}
            >
              {cuisine.label}
            </div>);
        });
        return rows;
      }
      return null;
    })();
    const cuisineDropdownStyle = (cuisineDropdownRows &&
      DROPDOWN_CONTAINER_STYLE || {});
    const facebookErrorMessage = (!this.props.facebookInputIsValid &&
      <div style={SOCIAL_MEDIA_ERROR_MESSAGE_STYLE} >
        Please enter a valid URL.
      </div> || null);
    const twitterErrorMessage = (!this.props.twitterInputIsValid &&
      <div style={SOCIAL_MEDIA_ERROR_MESSAGE_STYLE} >
        Please enter a valid URL.
      </div> || null);
    const instagramErrorMessage = (!this.props.instagramInputIsValid &&
      <div style={SOCIAL_MEDIA_ERROR_MESSAGE_STYLE} >
        Please enter a valid URL.
      </div> || null);
    const backgroundImageStyle = (() => {
      if (this.props.coverImage.profileId === -1) {
        return { backgroundImage: 'none' };
      }
      return { backgroundImage: `url(${this.props.coverImage.src})` };
    })();
    const locationErrorMessage = (!this.props.isLocationValid &&
      'Please enter in the following format: City, Province' || '');
    const isSaveDisabled = (!this.props.isLocationValid ||
      !this.props.instagramInputIsValid || !this.props.twitterInputIsValid ||
      !this.props.facebookInputIsValid);
    return (
      <div style={{...CONTAINER_STYLE, ...containerStyle}} >
        {chooseBannerModal}
        <div
          style={{...COVER_IMAGE_STYLE, ...backgroundImageStyle,
            ...coverImageStyle}}
        />
        <InvertedSecondaryTextButton
          style={changeBannerButtonStyle}
          label='Change Banner'
          labelStyle={CHANGE_BANNER_LABEL_STYLE}
          onClick={this.handleChangeBannerClick}
        />
        <div style={contentContainerStyle} >
          <div style={imagePrivacyContainerStyle} >
            <div style={IMAGE_CONTAINER_STYLE} >
              <img
                style={PROFILE_IMAGE_STYLE}
                src={this.props.profileImage.src}
                alt='Profile Image'
              />
              <input
                type='file'
                accept='image/*'
                onChange={this.handleChangeProfileImageClick}
              />
              <button
                  style={CHANGE_IMAGE_BUTTON_STYLE}
                  onClick={this.handleChangeProfileButton}
              >
                <img
                  style={CHANGE_IMAGE_ICON_STYLE}
                  src='resources/edit_profile_page/icons/change_image.svg'
                  alt='Change Image Icon'
                />
              </button>
            </div>
            <div style={COLUMN_CONTAINER_STYLE} >
              <div style={DISPLAY_NAME_TEXT_STYLE} >
                {this.props.displayName}
              </div>
              <div style={ACCOUNT_GUIDE_TEXT_STYLE} >
                To change your display name, go to&nbsp;
                <RedNavLink
                  label='Account Information'
                  to={`/settings/${this.props.profileId}`}
                  style={LINK_STYLE}
                />
                &nbsp;in your settings.
              </div>
            </div>
          </div>
          <div style={PUBLIC_HIDDEN_CONTAINER_STYLE} >
            <div style={PUBLIC_HIDDEN_ICON_ROW_STYLE} >
              <div style={PRIVACY_ICON_CONTAINER_STYLE} >
                <img
                  style={PRIVACY_ICON_STYLE}
                  src='resources/edit_profile_page/icons/public.svg'
                  alt='Public Icon'
                />
              </div>
              <div style={PRIVACY_TEXT_STYLE} >Public</div>
              <div style={PRIVACY_ICON_CONTAINER_STYLE} >
                <img
                  style={PRIVACY_ICON_STYLE}
                  src='resources/edit_profile_page/icons/private.svg'
                  alt='Private Icon'
                />
              </div>
              <div style={PRIVACY_TEXT_STYLE} >Private</div>
            </div>
            <div style={GUIDE_TEXT_STYLE} >
              You can hide sections of your profile by clicking the eye icon.
            </div>
          </div>
          <div style={TITLE_MARGIN_STYLE} >Events</div>
          <div style={GUIDE_TEXT_STYLE} >
            If you choose to hide any of the following sections, they will be
            &nbsp;visible only to you.
          </div>
          <div style={SUB_TITLE_CONTAINER_STYLE} >
            {upcomingEventsPrivacyButton}
            <div>UPCOMING EVENTS</div>
          </div>
          <div style={GUIDE_TEXT_STYLE} >
            Publically display the events that you’re attending, or hide&nbsp;
            them for only you to see.
          </div>
          <div style={SUB_TITLE_CONTAINER_STYLE} >
            {pastEventsPrivacyButton}
            <div>PAST EVENTS</div>
          </div>
          <div style={GUIDE_TEXT_STYLE} >
            Publically display the events that you attended, or hide them&nbsp;
            for only you to see.
          </div>
          <div style={ROW_CONTAINER_STYLE} >
            {locationPrivacyButton}
            <div style={TITLE_STYLE} >Location</div>
          </div>
          <div style={GUIDE_TEXT_STYLE} >
            Enter your city here.
          </div>
          <InputField
            style={{...INPUT_FIELD_STYLE, ...MARGIN_STYLE}}
            value={this.props.locationValue || ''}
            placeholder='City, Province'
            type='text'
            hasError={!this.props.isLocationValid}
            onChange={this.handleLocationInputChange}
          />
          <div style={LOCATION_ERROR_MESSAGE_STYLE} >
            {locationErrorMessage}
          </div>
          <div style={LANGUAGE_ROW_CONTAINER_STYLE} >
            {languagesPrivacyButton}
            <div style={TITLE_STYLE} >Languages</div>
          </div>
          <div style={GUIDE_TEXT_STYLE} >
            Helps you connect to more people. Optional.
          </div>
          <InputField
            style={{...languageInputFieldStyle, ...MARGIN_STYLE}}
            value={this.props.languageValue || ''}
            placeholder='Start typing to add a language...'
            type='text'
            onChange={this.handleLanguageInputChange}
            onFocus={this.handleLanguageInputFocus}
            onBlur={this.handleLanguageInputBlur}
          />
          <div
              tabIndex={0}
              ref={this._languageDropdownRef}
              style={languageDropdownStyle}
          >
            {languageDropdownRows}
          </div>
          {selectedLanguages}
          <div style={ROW_CONTAINER_STYLE} >
            {biographyPrivacyButton}
            <div style={TITLE_STYLE} >Biography</div>
          </div>
          <div style={GUIDE_TEXT_STYLE} >
            Tell others a bit about you! Optional.
          </div>
          <TextareaWithCounter
            style={MARGIN_STYLE}
            maxCount={280}
            value={this.props.biographyValue || ''}
            onValueChange={this.props.onBiographyInputChange}
          />
          <div style={TITLE_MARGIN_STYLE} >Social Media</div>
          <div style={SOCIAL_LINK_ROW_CONTAINER_STYLE} >
            {facebookPrivacyButton}
            <InputFieldWithIcon
              style={INPUT_FIELD_STYLE}
              iconSrc='resources/edit_profile_page/icons/facebook.svg'
              iconAlt='Facebook Icon'
              value={this.props.facebookLink}
              type='url'
              placeholder='Enter your Facebook profile URL'
              onChange={this.handleFacebookInputChange}
              hasError={!this.props.facebookInputIsValid}
            />
          </div>
          {facebookErrorMessage}
          <div style={SOCIAL_LINK_ROW_CONTAINER_STYLE} >
            {twitterPrivacyButton}
            <InputFieldWithIcon
              style={INPUT_FIELD_STYLE}
              iconSrc='resources/edit_profile_page/icons/twitter.svg'
              iconAlt='Twitter Icon'
              value={this.props.twitterLink}
              type='url'
              placeholder='Enter your Twitter profile URL'
              onChange={this.handleTwitterInputChange}
              hasError={!this.props.twitterInputIsValid}
            />
          </div>
          {twitterErrorMessage}
          <div style={SOCIAL_LINK_ROW_CONTAINER_STYLE} >
            {instagramPrivacyButton}
            <InputFieldWithIcon
              style={INPUT_FIELD_STYLE}
              iconSrc='resources/edit_profile_page/icons/instagram.svg'
              iconAlt='Instagram Icon'
              value={this.props.instagramLink}
              type='url'
              placeholder='Enter your Instagram profile URL'
              onChange={this.handleInstagramInputChange}
              hasError={!this.props.instagramInputIsValid}
            />
          </div>
          {instagramErrorMessage}
          <div style={ROW_CONTAINER_STYLE} >
            {cuisinesPrivacyButton}
            <div style={TITLE_STYLE} >Favorite Cuisines</div>
          </div>
          <div style={GUIDE_TEXT_STYLE} >
            Pick up to 5 of your favourite cuisines.
          </div>
          <InputField
            style={{...cuisineInputFieldStyle, ...MARGIN_STYLE}}
            value={this.props.cuisineValue || ''}
            placeholder='Start typing to add a cuisine...'
            type='text'
            onChange={this.handleCuisineInputChange}
            onFocus={this.handleCuisineInputFocus}
            onBlur={this.handleCuisineInputBlur}
          />
          <div
              tabIndex={0}
              ref={this._cuisineDropdownRef}
              style={cuisineDropdownStyle}
          >
            {cuisineDropdownRows}
          </div>
          {selectedCuisines}
        </div>
        <SaveCancelStickyMenu
          displayMode={this.props.displayMode}
          isSaveDisabled={isSaveDisabled}
          onSaveClick={this.props.onSaveClick}
          onCancelClick={this.props.onCancelClick}
        />
      </div>);
  }

  public componentDidMount(): void {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  public componentWillUnmount(): void {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  private handleClickOutside: { (event: any): void } = (
      event: React.MouseEvent) => {
    if (this.state.isLanguageDropdownDisplayed &&
        !this.state.isLanguageInputFocued &&
        !this._languageDropdownRef.current.contains(event.target as Node)) {
      event.preventDefault();
      event.stopPropagation();
      this.handleHideLanguageDropdown();
    }
    if (this.state.isCuisineDropdownDisplayed &&
        !this.state.isCuisineInputFocued &&
        !this._cuisineDropdownRef.current.contains(event.target as Node)) {
      event.preventDefault();
      event.stopPropagation();
      this.handleHideCuisineDropdown();
    }
  }

  private handleLocationInputChange = (event: React.ChangeEvent<
      HTMLInputElement>) => {
    this.props.onLocationInputChange(event.target.value);
  }

  private handleLanguageInputChange = (event: React.ChangeEvent<
      HTMLInputElement>) => {
    this.props.onLanguageInputChange(event.target.value);
  }

  private handleLanguageInputFocus = () => {
    this.setState({
      isLanguageDropdownDisplayed: true,
      isLanguageInputFocued: true
    });
  }

  private handleLanguageInputBlur = () => {
    this.setState({ isLanguageInputFocued: false });
  }

  private handleHideLanguageDropdown = () => {
    this.setState({ isLanguageDropdownDisplayed: false });
  }

  private handleLanguageClick = (selectedLanguage: Language) => {
    this.props.onLanguageDropdownClick(selectedLanguage);
    this.handleHideLanguageDropdown();
  }

  private handleFacebookInputChange = (event: React.ChangeEvent<
      HTMLInputElement>) => {
    this.props.onFacebookInputChange(event.target.value.trim());
  }

  private handleTwitterInputChange = (event: React.ChangeEvent<
      HTMLInputElement>) => {
    this.props.onTwitterInputChange(event.target.value.trim());
  }

  private handleInstagramInputChange = (event: React.ChangeEvent<
      HTMLInputElement>) => {
    this.props.onInstagramInputChange(event.target.value.trim());
  }

  private handleCuisineInputChange = (event: React.ChangeEvent<
      HTMLInputElement>) => {
    this.props.onCuisineInputChange(event.target.value);
  }

  private handleCuisineInputFocus = () => {
    this.setState({
      isCuisineDropdownDisplayed: true,
      isCuisineInputFocued: true
    });
  }

  private handleCuisineInputBlur = () => {
    this.setState({ isCuisineInputFocued: false });
  }

  private handleHideCuisineDropdown = () => {
    this.setState({ isCuisineDropdownDisplayed: false });
  }

  private handleCuisineClick = (selectedCuisine: Cuisine) => {
    this.props.onCuisineDropdownClick(selectedCuisine);
    this.handleHideCuisineDropdown();
  }

  private handleChangeBannerClick = () => {
    this.setState({ isChangeBanner: true });
  }

  private handleModalClose = () => {
    this.setState({ isChangeBanner: false });
  }

  private handleChangeProfileImageClick = (event: React.ChangeEvent<
      HTMLInputElement>) => {
    const newImage = new UserProfileImage(this.props.profileImage.userId,
      event.currentTarget.src);
    this.setState({ newProfileImage: newImage });
  }

  private handleChangeProfileButton = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';
    input.addEventListener('change', async (event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files && target.files[0];
      if (file) {
        try {
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
          };
          const compressedFile = await imageCompression(file, options);
          this.props.onChangeProfileImageClick(compressedFile);
        } catch (error) {
          console.error("Image compression failed:", error);
        }
      }
    });
    input.click();
  }

  private _languageDropdownRef: React.RefObject<HTMLDivElement>;
  private _cuisineDropdownRef: React.RefObject<HTMLDivElement>;
}

const CONTAINER_STYLE: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  backgroundColor: '#FFFFFF'
};

const DESKTOP_CONTAINER_STYLE: React.CSSProperties = {
  paddingBottom: '140px'
};

const TABLET_CONTAINER_STYLE: React.CSSProperties = {
  paddingBottom: '115px'
};

const MOBILE_CONTAINER_STYLE: React.CSSProperties = {
  paddingBottom: '87px'
};

const COVER_IMAGE_STYLE: React.CSSProperties = {
  backgroundSize: 'cover',
  backgroundColor: '#C4C4C4',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left center',
  width: '100%'
};

const DESKTOP_COVER_IMAGE_STYLE: React.CSSProperties = {
  height: '120px'
};

const TABLET_COVER_IMAGE_STYLE: React.CSSProperties = {
  height: '200px'
};

const MOBILE_COVER_IMAGE_STYLE: React.CSSProperties = {
  height: '200px'
};

const MOBILE_TABLET_CHANGE_BANNER_BUTTON_STYLE: React.CSSProperties = {
  width: '211px',
  height: '35px',
  backgroundColor: 'rgba(150, 150, 150, 0.5)',
  marginTop: '-160px'
};

const DESKTOP_CHANGE_BANNER_BUTTON_STYLE: React.CSSProperties = {
  ...MOBILE_TABLET_CHANGE_BANNER_BUTTON_STYLE,
  marginTop: '-80px'
};

const CHANGE_BANNER_LABEL_STYLE: React.CSSProperties = {
  fontSize: '12px',
  lineHeight: '15px',
  color: '#FFFFFF'
};

const DESKTOP_TABLET_CONTENT_CONTAINER_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  backgroundColor: '#FFFFFF',
  padding: '30px',
  width: '590px',
  marginTop: '22px',
  borderRadius: '4px'
};

const MOBILE_CONTENT_CONTAINER_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  backgroundColor: '#FFFFFF',
  padding: '30px 20px',
  width: '100%',
  marginTop: '83px',
  borderRadius: '0px 0px 4px 4px'
};

const DESKTOP_TABLET_IMAGE_PRIVACY_CONTAINER_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  height: '68px',
  marginBottom: '30px'
};

const MOBILE_IMAGE_PRIVACY_CONTAINER_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  marginBottom: '30px',
  gap: '10px'
};

const IMAGE_CONTAINER_STYLE: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '68px',
  height: '68px',
  marginRight: '30px'
};

const PROFILE_IMAGE_STYLE: React.CSSProperties = {
  width: '100%',
  height: '100%',
  minWidth: '68px',
  minHeight: '68px',
  objectFit: 'cover',
  backgroundColor: 'transparent',
  borderRadius: '50%'
};

const CHANGE_IMAGE_BUTTON_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  position: 'absolute',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#969696',
  width: '26px',
  height: '26px',
  borderRadius: '4px',
  border: '1px solid #FFFFFF',
  padding: '0px',
  margin: '0px'
};

const CHANGE_IMAGE_ICON_STYLE: React.CSSProperties = {
  height: '16px',
  width: '16px',
  backgroundColor: 'transparent'
};

const COLUMN_CONTAINER_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%'
};

const PUBLIC_HIDDEN_CONTAINER_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
};

const PUBLIC_HIDDEN_ICON_ROW_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '20px',
  marginBottom: '2px'
};

const PRIVACY_ICON_CONTAINER_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20px',
  height: '20px',
  marginRight: '10px'
};

const PRIVACY_ICON_STYLE: React.CSSProperties = {
  width: '100%',
  height: '100%',
  minWidth: '20px',
  minHeight: '20px',
  backgroundColor: 'transparent'
};

const PRIVACY_TEXT_STYLE: React.CSSProperties = {
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
  color: '#000000',
  marginRight: '30px'
};

const GUIDE_TEXT_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '15px',
  color: '#969696',
  width: '100%'
};

const ACCOUNT_GUIDE_TEXT_STYLE: React.CSSProperties = {
  ...GUIDE_TEXT_STYLE,
  whiteSpace: 'pre'
}

const TITLE_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '23px',
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: '23px',
  textTransform: 'capitalize',
  color: '#000000'
};

const DISPLAY_NAME_TEXT_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontFamily: 'Oswald',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '23px',
  lineHeight: '34px',
  color: '#000000',
  width: '100%'
};

const LINK_STYLE: React.CSSProperties = {
  width: 'fit-content',
  height: '15px'
};

const TITLE_MARGIN_STYLE: React.CSSProperties = {
  ...TITLE_STYLE,
  marginTop: '30px'
};

const SUB_TITLE_CONTAINER_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '10px',
  marginTop: '10px',
  marginBottom: '4px',
  textTransform: 'uppercase',
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '18px',
  color: '#000000'
};

const ROW_CONTAINER_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  gap: '10px',
  marginTop: '30px'
};

const LANGUAGE_ROW_CONTAINER_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  gap: '10px',
  marginTop: '10px'
};

const DROPDOWN_CONTAINER_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  backgroundColor: '#FFFFFF',
  padding: '0px',
  borderWidth: '0px 1px 1px 1px',
  borderStyle: 'solid',
  borderColor: '#969696',
  borderRadius: '0px 0px 4px 4px',
  overflow: 'hidden'
};

const INPUT_FIELD_STYLE: React.CSSProperties = {
  width: '100%'
};

const MARGIN_STYLE: React.CSSProperties = {
  marginTop: '10px'
};

const SOCIAL_LINK_ROW_CONTAINER_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  gap: '20px',
  marginTop: '10px'
};

const SOCIAL_MEDIA_ERROR_MESSAGE_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
  textAlign: 'right',
  color: '#FF2C79',
  marginTop: '2px',
  height: '18px'
};

const DROPDOWN_ROW_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingLeft: '10px',
  paddingRight: '10px',
  gap: '10px',
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
  color: '#000000',
  backgroundColor: '#FFFFFF',
  width: '100%',
  minHeight: '38px',
  cursor: 'pointer',
  whiteSpace: 'pre'
};

const INPUT_WITH_DROPDOWN_STYLE: React.CSSProperties = {
  width: '100%',
  borderRadius: '4px 4px 0px 0px'
};

const SELECTED_OPTIONS_ROW_CONTAINER_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  width: '100%',
  marginTop: '20px',
  gap: '10px',
  minHeight: '38px'
};

const SELECTED_OPTION_TAG_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '20px',
  paddingLeft: '10px',
  paddingRight: '10px',
  height: '38px',
  backgroundColor: '#EFEFEF',
  borderRadius: '4px',
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
  color: '#000000',
  width: 'fit-content',
  overflow: 'hidden',
  cursor: 'default'
};

const LOCATION_ERROR_MESSAGE_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  margin: '2px 0px 0px 0px',
  width:' 100%',
  lineHeight: '18px',
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  color: '#FF2C79',
  height: '18px'
};

const styles = StyleSheet.create({
  dropdownRow: {
    ':hover': {
      backgroundColor: '#F6F6F6'
    },
    ':focus': {
      backgroundColor: '#F6F6F6'
    },
    ':focus-within': {
      backgroundColor: '#F6F6F6'
    },
    ':active': {
      backgroundColor: '#F6F6F6'
    }
  }
});
