import React from "react";
import { twMerge } from "tailwind-merge";
// --------------------------------------------------------------
type Props = {
	className?: string;
};

const Styles = {
	container: "flex items-center justify-center gap-4",
};

// --------------------------------------------------------------
const Heading = ({ className }: Props) => {
	return (
		<svg
			className={twMerge(Styles.container, className)}
			viewBox="0 0 690 197"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M53.368 7.696V16.336C53.368 17.488 52.952 18.512 52.12 19.408C51.352 20.304 50.456 20.752 49.432 20.752H21.4V28.816H48.088C49.112 28.816 50.008 29.2 50.776 29.968C51.544 30.736 51.928 31.76 51.928 33.04V41.68C51.928 42.832 51.544 43.856 50.776 44.752C50.008 45.648 49.112 46.096 48.088 46.096H21.4V65.584C21.4 66.736 20.984 67.76 20.152 68.656C19.32 69.552 18.392 70 17.368 70H4.792C3.704 70 2.744 69.552 1.912 68.656C1.144 67.76 0.76 66.736 0.76 65.584V16.336V7.696V7.6C0.76 6.384 1.144 5.392 1.912 4.62399C2.68 3.856 3.64 3.472 4.792 3.472H49.432C50.456 3.472 51.352 3.888 52.12 4.72C52.952 5.488 53.368 6.48 53.368 7.696ZM66.805 65.776V7.216C66.805 6 67.189 4.976 67.957 4.144C68.725 3.248 69.749 2.8 71.029 2.8H84.181C85.333 2.8 86.293 3.248 87.061 4.144C87.893 4.976 88.309 6 88.309 7.216V65.776C88.309 67.12 87.893 68.208 87.061 69.04C86.293 69.808 85.333 70.192 84.181 70.192H71.029C69.749 70.192 68.725 69.808 67.957 69.04C67.189 68.208 66.805 67.12 66.805 65.776ZM97.789 58C97.789 56.848 98.365 55.504 99.517 53.968L103.069 49.36C104.093 47.888 104.893 46.864 105.469 46.288C106.109 45.648 106.781 45.328 107.485 45.328C108.061 45.328 108.765 45.52 109.597 45.904C110.429 46.288 111.581 46.928 113.053 47.824C113.245 47.952 114.877 49.072 117.949 51.184C121.021 53.296 124.861 54.224 129.469 53.968C131.005 53.904 132.189 53.488 133.021 52.72C133.917 51.888 134.365 50.896 134.365 49.744C134.365 48.208 133.597 46.8 132.061 45.52C130.525 44.24 128.349 43.504 125.533 43.312H125.629C119.997 42.16 115.613 40.72 112.477 38.992C109.341 37.2 107.101 35.088 105.757 32.656C104.413 30.224 103.613 27.216 103.357 23.632C103.101 19.408 103.997 15.568 106.045 12.112C108.093 8.592 111.037 5.84 114.877 3.856C118.717 1.808 123.133 0.783998 128.125 0.783998C131.837 0.783998 135.549 1.328 139.261 2.41599C142.333 3.248 145.117 4.368 147.613 5.776C150.173 7.12 152.189 8.688 153.661 10.48C154.557 11.376 155.005 12.208 155.005 12.976C155.005 13.616 154.749 14.32 154.237 15.088C153.789 15.792 152.989 16.784 151.837 18.064L149.053 21.04C148.157 22 147.453 22.672 146.941 23.056C146.493 23.376 146.045 23.536 145.597 23.536C145.149 23.536 144.573 23.344 143.869 22.96C143.165 22.576 142.461 22.192 141.757 21.808C141.117 21.36 140.541 20.976 140.029 20.656C135.613 17.84 131.741 16.432 128.413 16.432C126.365 16.432 124.733 16.944 123.517 17.968C122.365 18.928 121.789 20.112 121.789 21.52C121.789 22.928 122.365 24.208 123.517 25.36C124.669 26.448 126.301 27.152 128.413 27.472C137.565 28.88 144.381 31.6 148.861 35.632C153.405 39.664 155.677 44.272 155.677 49.456C155.677 53.296 154.461 57.008 152.029 60.592C149.661 64.112 146.333 66.992 142.045 69.232C137.821 71.408 133.085 72.496 127.837 72.496C119.261 72.496 110.653 69.488 102.013 63.472C99.197 61.552 97.789 59.728 97.789 58ZM233.085 6.832V65.968C233.085 67.12 232.701 68.08 231.933 68.848C231.165 69.616 230.237 70 229.149 70H215.229C214.205 70 213.277 69.584 212.445 68.752C211.613 67.92 211.197 66.992 211.197 65.968V43.696H186.525V65.968C186.525 66.992 186.109 67.92 185.277 68.752C184.509 69.584 183.581 70 182.493 70H168.573C167.549 70 166.621 69.584 165.789 68.752C164.957 67.92 164.541 66.992 164.541 65.968V6.832C164.541 5.744 164.925 4.816 165.693 4.048C166.461 3.27999 167.421 2.89599 168.573 2.89599H182.493C183.645 2.89599 184.605 3.27999 185.373 4.048C186.141 4.816 186.525 5.744 186.525 6.832V27.184H211.197V6.832C211.197 5.744 211.581 4.816 212.349 4.048C213.117 3.27999 214.077 2.89599 215.229 2.89599H229.149C230.365 2.89599 231.325 3.248 232.029 3.952C232.733 4.656 233.085 5.616 233.085 6.832ZM266.469 19.984V27.76H293.541C294.565 27.76 295.461 28.176 296.229 29.008C297.061 29.776 297.477 30.768 297.477 31.984V40.336C297.477 41.424 297.061 42.416 296.229 43.312C295.461 44.144 294.565 44.56 293.541 44.56H266.469V53.104H294.885C295.973 53.104 296.901 53.52 297.669 54.352C298.501 55.12 298.917 56.144 298.917 57.424V65.68C298.917 66.832 298.501 67.856 297.669 68.752C296.901 69.584 295.973 70 294.885 70H249.573C248.485 70 247.525 69.584 246.693 68.752C245.925 67.856 245.541 66.832 245.541 65.68V65.392V57.424V15.76V7.408C245.541 6.192 245.925 5.2 246.693 4.432C247.525 3.6 248.485 3.184 249.573 3.184H294.885C295.973 3.184 296.901 3.6 297.669 4.432C298.501 5.2 298.917 6.192 298.917 7.408V15.76C298.917 16.848 298.501 17.84 297.669 18.736C296.837 19.568 295.909 19.984 294.885 19.984H266.469ZM348.72 64.24C348.016 59.888 346.544 56.88 344.304 55.216C342.128 53.488 339.408 52.464 336.144 52.144C335.696 52.08 335.152 52.048 334.512 52.048C333.872 52.048 333.328 52.112 332.88 52.24L332.784 52.336V64.624C332.784 65.84 332.656 66.832 332.4 67.6C332.208 68.304 331.6 68.912 330.576 69.424C329.616 69.872 328.08 70.096 325.968 70.096H317.04C315.056 70.16 313.488 69.808 312.336 69.04C311.184 68.208 310.608 67.088 310.608 65.68L310.704 39.76V6.352C310.704 5.392 311.184 4.56 312.144 3.856C313.104 3.088 314.256 2.704 315.6 2.704H337.392C346.992 2.64 354.096 4.272 358.704 7.6C363.312 10.864 365.808 16.016 366.192 23.056C366.256 23.696 366.256 24.208 366.192 24.592C366.192 24.912 366.192 25.2 366.192 25.456V27.472C365.872 31.184 364.88 34.128 363.216 36.304C361.616 38.48 359.472 40.496 356.784 42.352L356.88 42.448C360.016 43.984 362.512 46.192 364.368 49.072C366.224 51.952 367.472 54.96 368.112 58.096C368.816 61.232 369.104 64.048 368.976 66.544C368.976 67.632 368.592 68.496 367.824 69.136C367.056 69.776 365.968 70.096 364.56 70.096H352.848C351.184 70.096 350.096 69.68 349.584 68.848C349.136 68.016 348.88 67.152 348.816 66.256C348.816 65.296 348.784 64.624 348.72 64.24ZM334.416 34.192C337.36 34.192 340.048 33.68 342.48 32.656C344.976 31.568 346.224 29.104 346.224 25.264C346.224 22.576 345.392 20.528 343.728 19.12C342.128 17.712 339.792 17.008 336.72 17.008H328.848V17.968V34.192H329.52H329.808H334.416ZM379.791 66.544V6.16C379.791 5.264 380.111 4.496 380.751 3.856C381.455 3.152 382.287 2.8 383.247 2.8H398.127C398.767 2.8 399.439 2.96 400.143 3.27999C400.847 3.536 401.327 3.824 401.583 4.144L419.439 23.728L438.159 4.23999C438.927 3.536 439.759 3.12 440.655 2.992C441.615 2.864 442.735 2.8 444.015 2.8H456.975C457.871 2.8 458.639 3.152 459.279 3.856C459.983 4.496 460.335 5.264 460.335 6.16V66.544C460.335 67.504 460.015 68.336 459.375 69.04C458.735 69.68 457.935 70 456.975 70H444.111C443.151 70 442.287 69.68 441.519 69.04C440.815 68.336 440.463 67.504 440.463 66.544V31.216L425.007 50.8C423.727 52.528 422.095 53.392 420.111 53.392C419.151 53.392 418.223 53.2 417.327 52.816C416.495 52.368 415.823 51.792 415.311 51.088L399.471 31.216L399.567 66.544C399.567 67.504 399.247 68.336 398.607 69.04C397.967 69.68 397.167 70 396.207 70H383.247C382.287 70 381.455 69.648 380.751 68.944C380.111 68.24 379.791 67.44 379.791 66.544ZM468.98 66.16C468.98 65.072 469.141 64.016 469.461 62.992C469.845 61.904 470.069 61.296 470.133 61.168L491.445 7.12C492.021 5.776 492.853 4.752 493.941 4.048C495.093 3.27999 496.437 2.86399 497.973 2.8H505.845H511.797C513.461 2.86399 514.837 3.31199 515.925 4.144C517.013 4.976 517.749 5.968 518.133 7.12L539.637 61.168C539.701 61.488 539.893 62.16 540.213 63.184C540.533 64.144 540.693 65.072 540.693 65.968C540.693 68.272 539.413 69.616 536.853 70H523.701C522.357 70 521.205 69.776 520.245 69.328C519.349 68.816 518.773 68.112 518.517 67.216L515.541 57.616H494.133L491.156 67.216C490.901 68.112 490.325 68.816 489.429 69.328C488.533 69.776 487.413 70 486.069 70H472.725C470.229 69.616 468.98 68.336 468.98 66.16ZM505.845 41.392H512.085L504.501 18.832L497.013 41.392H505.845ZM604.103 69.328C603.719 69.136 600.935 66.32 595.751 60.88C590.567 55.44 582.983 47.408 572.999 36.784C572.039 35.824 571.431 35.344 571.175 35.344C570.919 35.344 570.759 35.504 570.695 35.824C570.631 36.08 570.599 36.528 570.599 37.168V65.872C570.599 66.896 570.215 67.792 569.447 68.56C568.743 69.328 567.847 69.712 566.759 69.712H553.991C552.775 69.712 551.719 69.232 550.823 68.272C549.927 67.248 549.479 66.064 549.479 64.72V8.17599C549.479 6.768 549.959 5.52 550.919 4.432C551.879 3.344 552.999 2.8 554.279 2.8H566.183C567.271 2.8 568.103 2.96 568.679 3.27999C569.319 3.536 570.119 4.176 571.079 5.2C574.023 8.272 578.823 13.296 585.479 20.272C592.135 27.184 597.351 32.56 601.127 36.4C601.639 36.72 601.991 36.88 602.183 36.88C602.567 36.88 602.759 36.368 602.759 35.344V6.736C602.759 5.712 603.143 4.816 603.911 4.048C604.679 3.216 605.543 2.8 606.503 2.8H618.695C620.103 2.8 621.319 3.312 622.343 4.336C623.367 5.36 623.879 6.544 623.879 7.888V65.008C623.879 66.288 623.367 67.44 622.343 68.464C621.383 69.488 620.263 70 618.983 70H608.135C606.919 70 606.055 69.968 605.543 69.904C605.095 69.776 604.615 69.584 604.103 69.328ZM631.414 58C631.414 56.848 631.99 55.504 633.142 53.968L636.694 49.36C637.718 47.888 638.518 46.864 639.094 46.288C639.734 45.648 640.406 45.328 641.11 45.328C641.686 45.328 642.39 45.52 643.222 45.904C644.054 46.288 645.206 46.928 646.678 47.824C646.87 47.952 648.502 49.072 651.574 51.184C654.646 53.296 658.486 54.224 663.094 53.968C664.63 53.904 665.814 53.488 666.646 52.72C667.542 51.888 667.99 50.896 667.99 49.744C667.99 48.208 667.222 46.8 665.686 45.52C664.15 44.24 661.974 43.504 659.158 43.312H659.254C653.622 42.16 649.238 40.72 646.102 38.992C642.966 37.2 640.726 35.088 639.382 32.656C638.038 30.224 637.238 27.216 636.982 23.632C636.726 19.408 637.622 15.568 639.67 12.112C641.718 8.592 644.662 5.84 648.502 3.856C652.342 1.808 656.758 0.783998 661.75 0.783998C665.462 0.783998 669.174 1.328 672.886 2.41599C675.958 3.248 678.742 4.368 681.238 5.776C683.798 7.12 685.814 8.688 687.286 10.48C688.182 11.376 688.63 12.208 688.63 12.976C688.63 13.616 688.374 14.32 687.862 15.088C687.414 15.792 686.614 16.784 685.462 18.064L682.678 21.04C681.782 22 681.078 22.672 680.566 23.056C680.118 23.376 679.67 23.536 679.222 23.536C678.774 23.536 678.198 23.344 677.494 22.96C676.79 22.576 676.086 22.192 675.382 21.808C674.742 21.36 674.166 20.976 673.654 20.656C669.238 17.84 665.366 16.432 662.038 16.432C659.99 16.432 658.358 16.944 657.142 17.968C655.99 18.928 655.414 20.112 655.414 21.52C655.414 22.928 655.99 24.208 657.142 25.36C658.294 26.448 659.926 27.152 662.038 27.472C671.19 28.88 678.006 31.6 682.486 35.632C687.03 39.664 689.302 44.272 689.302 49.456C689.302 53.296 688.086 57.008 685.654 60.592C683.286 64.112 679.958 66.992 675.67 69.232C671.446 71.408 666.71 72.496 661.462 72.496C652.886 72.496 644.278 69.488 635.638 63.472C632.822 61.552 631.414 59.728 631.414 58ZM4.792 194.904C3.704 194.904 2.744 194.52 1.912 193.752C1.144 192.92 0.76 191.896 0.76 190.68V131.928C0.76 130.712 1.144 129.688 1.912 128.856C2.744 128.024 3.704 127.608 4.792 127.608H17.752C18.84 127.608 19.768 128.024 20.536 128.856C21.368 129.688 21.784 130.712 21.784 131.928V174.936H48.184C49.4 174.936 50.424 175.32 51.256 176.088C52.152 176.856 52.6 177.816 52.6 178.968V191.064C52.6 192.152 52.152 193.08 51.256 193.848C50.424 194.616 49.4 195 48.184 195H7.288L4.792 194.904ZM112.348 98.712C112.348 101.144 111.452 103.224 109.66 104.952C107.868 106.68 105.724 107.544 103.228 107.544C100.796 107.544 98.684 106.68 96.892 104.952C95.164 103.16 94.3 101.016 94.3 98.52C94.3 96.024 95.164 93.88 96.892 92.088C98.62 90.296 100.732 89.4 103.228 89.4C105.788 89.4 107.932 90.296 109.66 92.088C111.452 93.816 112.348 96.024 112.348 98.712ZM106.684 97.944C106.556 97.048 106.14 96.312 105.436 95.736C104.796 95.16 104.028 94.872 103.132 94.872C102.172 94.872 101.372 95.224 100.732 95.928C100.092 96.568 99.772 97.368 99.772 98.328C99.772 99.288 100.092 100.12 100.732 100.824C101.436 101.464 102.268 101.784 103.228 101.784C104.188 101.784 105.02 101.368 105.724 100.536C106.428 99.704 106.748 98.84 106.684 97.944ZM137.692 117.528C137.692 120.024 136.988 122.392 135.58 124.632C134.172 126.872 132.348 128.664 130.108 130.008C127.868 131.352 125.532 132.024 123.1 132.024C120.54 132.024 118.172 131.384 115.996 130.104C113.82 128.824 112.06 127.096 110.716 124.92C109.436 122.744 108.796 120.344 108.796 117.72C108.796 115.16 109.436 112.792 110.716 110.616C111.996 108.376 113.724 106.616 115.9 105.336C118.076 103.992 120.476 103.32 123.1 103.32C125.66 103.32 128.06 103.96 130.3 105.24C132.54 106.456 134.332 108.152 135.676 110.328C137.02 112.504 137.692 114.904 137.692 117.528ZM128.284 117.24C128.284 115.768 127.74 114.552 126.652 113.592C125.564 112.568 124.316 112.056 122.908 112.056C121.308 112.056 120.028 112.568 119.068 113.592C118.108 114.616 117.628 115.864 117.628 117.336C117.628 118.808 118.108 120.088 119.068 121.176C120.092 122.2 121.372 122.712 122.908 122.712C124.316 122.712 125.564 122.168 126.652 121.08C127.74 119.992 128.284 118.712 128.284 117.24ZM57.34 161.784C57.34 155.448 58.908 149.592 62.044 144.216C65.244 138.84 69.532 134.584 74.908 131.448C80.284 128.248 86.14 126.648 92.476 126.648C98.812 126.648 104.668 128.248 110.044 131.448C115.484 134.584 119.772 138.84 122.908 144.216C126.108 149.592 127.708 155.448 127.708 161.784C127.708 168.12 126.108 173.976 122.908 179.352C119.772 184.728 115.484 189.016 110.044 192.216C104.668 195.352 98.812 196.92 92.476 196.92C86.14 196.92 80.284 195.352 74.908 192.216C69.532 189.016 65.244 184.728 62.044 179.352C58.908 173.976 57.34 168.12 57.34 161.784ZM107.452 160.92C107.452 158.168 106.748 155.64 105.34 153.336C103.932 151.032 102.044 149.208 99.676 147.864C97.372 146.456 94.876 145.752 92.188 145.752C89.372 145.752 86.78 146.456 84.412 147.864C82.108 149.208 80.284 151.032 78.94 153.336C77.596 155.64 76.924 158.168 76.924 160.92C76.924 163.672 77.596 166.232 78.94 168.6C80.284 170.904 82.108 172.76 84.412 174.168C86.78 175.512 89.372 176.184 92.188 176.184C94.876 176.184 97.372 175.512 99.676 174.168C102.044 172.76 103.932 170.904 105.34 168.6C106.748 166.232 107.452 163.672 107.452 160.92ZM133.655 161.4C133.655 154.872 135.191 148.92 138.263 143.544C141.335 138.104 145.495 133.848 150.743 130.776C155.991 127.64 161.687 126.072 167.831 126.072C169.047 126.072 169.975 126.104 170.615 126.168C174.327 126.424 177.207 126.84 179.255 127.416L179.735 127.512C180.439 127.576 180.983 127.832 181.367 128.28C181.751 128.728 181.943 129.304 181.943 130.008C181.943 130.648 181.815 131.256 181.559 131.832L177.623 140.76C176.599 143.384 175.063 144.696 173.015 144.696C167.767 144.696 163.511 145.784 160.247 147.96C157.047 150.136 154.967 153.368 154.007 157.656C153.687 159.128 153.527 160.44 153.527 161.592C153.527 164.984 154.455 168.024 156.311 170.712C158.231 173.4 161.111 175.224 164.951 176.184C166.999 176.568 168.823 176.76 170.423 176.76C174.455 176.76 177.655 175.8 180.023 173.88C182.455 171.896 184.023 169.4 184.727 166.392H179.351C178.327 166.392 177.495 166.072 176.855 165.432C176.215 164.728 175.895 163.864 175.895 162.84V150.264C175.895 149.304 176.215 148.472 176.855 147.768C177.559 147.064 178.391 146.712 179.351 146.712H201.719C202.807 146.712 203.703 147.064 204.407 147.768C205.111 148.408 205.463 149.24 205.463 150.264L205.271 157.176C205.207 157.944 205.111 159.32 204.983 161.304C204.919 163.224 204.791 165.016 204.599 166.68C204.023 172.312 202.071 177.432 198.743 182.04C195.415 186.584 191.191 190.168 186.071 192.792C180.951 195.416 175.575 196.728 169.943 196.728C163.671 196.728 157.751 195.16 152.183 192.024C146.615 188.824 142.135 184.504 138.743 179.064C135.351 173.624 133.655 167.736 133.655 161.4ZM213.198 193.368V157.656V129.624C213.198 128.92 213.518 128.344 214.158 127.896C214.798 127.448 215.63 127.224 216.654 127.224H230.766L237.582 127.032C244.942 127.032 250.67 127.896 254.766 129.624C258.926 131.352 261.742 133.688 263.214 136.632C264.75 139.576 265.518 143.128 265.518 147.288C265.518 151.64 264.334 155.416 261.966 158.616C265.358 160.472 267.758 162.648 269.166 165.144C270.638 167.576 271.374 170.744 271.374 174.648C271.374 175.672 271.342 176.472 271.278 177.048C271.086 180.504 270.35 183.608 269.07 186.36C267.79 189.048 265.23 191.352 261.39 193.272C257.55 195.192 252.046 196.152 244.878 196.152H217.23C216.078 196.152 215.118 195.864 214.35 195.288C213.582 194.776 213.198 194.136 213.198 193.368ZM242.382 181.656C245.198 181.528 247.31 180.824 248.718 179.544C250.126 178.264 250.83 176.536 250.83 174.36C250.83 172.184 250.062 170.488 248.526 169.272C246.99 167.992 244.366 167.32 240.654 167.256H233.262C232.302 167.256 231.822 167.48 231.822 167.928V180.792C231.822 181.048 231.95 181.272 232.206 181.464C232.462 181.592 232.814 181.656 233.262 181.656H242.382ZM239.982 154.104C242.222 154.04 243.918 153.432 245.07 152.28C246.286 151.128 246.894 149.688 246.894 147.96C246.894 143.928 244.206 141.784 238.83 141.528H232.686C232.43 141.528 232.174 141.624 231.918 141.816C231.726 142.008 231.63 142.232 231.63 142.488V153.336C231.63 153.592 231.726 153.784 231.918 153.912C232.11 154.04 232.366 154.104 232.686 154.104H239.982ZM333.129 98.712C333.129 101.144 332.233 103.224 330.441 104.952C328.649 106.68 326.505 107.544 324.009 107.544C321.577 107.544 319.465 106.68 317.673 104.952C315.945 103.16 315.081 101.016 315.081 98.52C315.081 96.024 315.945 93.88 317.673 92.088C319.401 90.296 321.513 89.4 324.009 89.4C326.569 89.4 328.713 90.296 330.441 92.088C332.233 93.816 333.129 96.024 333.129 98.712ZM327.465 97.944C327.337 97.048 326.921 96.312 326.217 95.736C325.577 95.16 324.809 94.872 323.913 94.872C322.953 94.872 322.153 95.224 321.513 95.928C320.873 96.568 320.553 97.368 320.553 98.328C320.553 99.288 320.873 100.12 321.513 100.824C322.217 101.464 323.049 101.784 324.009 101.784C324.969 101.784 325.801 101.368 326.505 100.536C327.209 99.704 327.529 98.84 327.465 97.944ZM358.473 117.528C358.473 120.024 357.769 122.392 356.361 124.632C354.953 126.872 353.129 128.664 350.889 130.008C348.649 131.352 346.313 132.024 343.881 132.024C341.321 132.024 338.953 131.384 336.777 130.104C334.601 128.824 332.841 127.096 331.497 124.92C330.217 122.744 329.577 120.344 329.577 117.72C329.577 115.16 330.217 112.792 331.497 110.616C332.777 108.376 334.505 106.616 336.681 105.336C338.857 103.992 341.257 103.32 343.881 103.32C346.441 103.32 348.841 103.96 351.081 105.24C353.321 106.456 355.113 108.152 356.457 110.328C357.801 112.504 358.473 114.904 358.473 117.528ZM349.065 117.24C349.065 115.768 348.521 114.552 347.433 113.592C346.345 112.568 345.097 112.056 343.689 112.056C342.089 112.056 340.809 112.568 339.849 113.592C338.889 114.616 338.409 115.864 338.409 117.336C338.409 118.808 338.889 120.088 339.849 121.176C340.873 122.2 342.153 122.712 343.689 122.712C345.097 122.712 346.345 122.168 347.433 121.08C348.521 119.992 349.065 118.712 349.065 117.24ZM278.121 161.784C278.121 155.448 279.689 149.592 282.825 144.216C286.025 138.84 290.313 134.584 295.689 131.448C301.065 128.248 306.921 126.648 313.257 126.648C319.593 126.648 325.449 128.248 330.825 131.448C336.265 134.584 340.553 138.84 343.689 144.216C346.889 149.592 348.489 155.448 348.489 161.784C348.489 168.12 346.889 173.976 343.689 179.352C340.553 184.728 336.265 189.016 330.825 192.216C325.449 195.352 319.593 196.92 313.257 196.92C306.921 196.92 301.065 195.352 295.689 192.216C290.313 189.016 286.025 184.728 282.825 179.352C279.689 173.976 278.121 168.12 278.121 161.784ZM328.233 160.92C328.233 158.168 327.529 155.64 326.121 153.336C324.713 151.032 322.825 149.208 320.457 147.864C318.153 146.456 315.657 145.752 312.969 145.752C310.153 145.752 307.561 146.456 305.193 147.864C302.889 149.208 301.065 151.032 299.721 153.336C298.377 155.64 297.705 158.168 297.705 160.92C297.705 163.672 298.377 166.232 299.721 168.6C301.065 170.904 302.889 172.76 305.193 174.168C307.561 175.512 310.153 176.184 312.969 176.184C315.657 176.184 318.153 175.512 320.457 174.168C322.825 172.76 324.713 170.904 326.121 168.6C327.529 166.232 328.233 163.672 328.233 160.92ZM409.348 98.712C409.348 101.144 408.452 103.224 406.66 104.952C404.868 106.68 402.724 107.544 400.228 107.544C397.796 107.544 395.684 106.68 393.892 104.952C392.164 103.16 391.3 101.016 391.3 98.52C391.3 96.024 392.164 93.88 393.892 92.088C395.62 90.296 397.732 89.4 400.228 89.4C402.788 89.4 404.932 90.296 406.66 92.088C408.452 93.816 409.348 96.024 409.348 98.712ZM403.684 97.944C403.556 97.048 403.14 96.312 402.436 95.736C401.796 95.16 401.028 94.872 400.132 94.872C399.172 94.872 398.372 95.224 397.732 95.928C397.092 96.568 396.772 97.368 396.772 98.328C396.772 99.288 397.092 100.12 397.732 100.824C398.436 101.464 399.268 101.784 400.228 101.784C401.188 101.784 402.02 101.368 402.724 100.536C403.428 99.704 403.748 98.84 403.684 97.944ZM434.692 117.528C434.692 120.024 433.988 122.392 432.58 124.632C431.172 126.872 429.348 128.664 427.108 130.008C424.868 131.352 422.532 132.024 420.1 132.024C417.54 132.024 415.172 131.384 412.996 130.104C410.82 128.824 409.06 127.096 407.716 124.92C406.436 122.744 405.796 120.344 405.796 117.72C405.796 115.16 406.436 112.792 407.716 110.616C408.996 108.376 410.724 106.616 412.9 105.336C415.076 103.992 417.476 103.32 420.1 103.32C422.66 103.32 425.06 103.96 427.3 105.24C429.54 106.456 431.332 108.152 432.676 110.328C434.02 112.504 434.692 114.904 434.692 117.528ZM425.284 117.24C425.284 115.768 424.74 114.552 423.652 113.592C422.564 112.568 421.316 112.056 419.908 112.056C418.308 112.056 417.028 112.568 416.068 113.592C415.108 114.616 414.628 115.864 414.628 117.336C414.628 118.808 415.108 120.088 416.068 121.176C417.092 122.2 418.372 122.712 419.908 122.712C421.316 122.712 422.564 122.168 423.652 121.08C424.74 119.992 425.284 118.712 425.284 117.24ZM354.34 161.784C354.34 155.448 355.908 149.592 359.044 144.216C362.244 138.84 366.532 134.584 371.908 131.448C377.284 128.248 383.14 126.648 389.476 126.648C395.812 126.648 401.668 128.248 407.044 131.448C412.484 134.584 416.772 138.84 419.908 144.216C423.108 149.592 424.708 155.448 424.708 161.784C424.708 168.12 423.108 173.976 419.908 179.352C416.772 184.728 412.484 189.016 407.044 192.216C401.668 195.352 395.812 196.92 389.476 196.92C383.14 196.92 377.284 195.352 371.908 192.216C366.532 189.016 362.244 184.728 359.044 179.352C355.908 173.976 354.34 168.12 354.34 161.784ZM404.452 160.92C404.452 158.168 403.748 155.64 402.34 153.336C400.932 151.032 399.044 149.208 396.676 147.864C394.372 146.456 391.876 145.752 389.188 145.752C386.372 145.752 383.78 146.456 381.412 147.864C379.108 149.208 377.284 151.032 375.94 153.336C374.596 155.64 373.924 158.168 373.924 160.92C373.924 163.672 374.596 166.232 375.94 168.6C377.284 170.904 379.108 172.76 381.412 174.168C383.78 175.512 386.372 176.184 389.188 176.184C391.876 176.184 394.372 175.512 396.676 174.168C399.044 172.76 400.932 170.904 402.34 168.6C403.748 166.232 404.452 163.672 404.452 160.92ZM501.887 190.872C501.887 191.832 501.631 192.664 501.119 193.368C500.671 194.008 500.063 194.36 499.295 194.424L482.015 194.52C481.055 194.52 480.255 194.104 479.615 193.272L466.751 174.84L453.215 193.176C452.959 193.752 452.511 194.2 451.871 194.52C451.295 194.84 450.655 195 449.951 195H436.223C435.071 195 434.143 194.68 433.439 194.04C432.799 193.336 432.479 192.408 432.479 191.256V132.696C432.479 131.608 432.831 130.712 433.535 130.008C434.239 129.304 435.135 128.952 436.223 128.952H449.951C450.975 128.952 451.839 129.336 452.543 130.104C453.311 130.808 453.695 131.672 453.695 132.696V158.136L474.911 131.16C476.063 129.688 477.983 129.048 480.671 129.24L495.455 129.336H495.359C496.767 129.528 497.471 130.328 497.471 131.736C497.471 132.696 497.087 133.72 496.319 134.808L479.999 156.984L501.311 188.76C501.695 189.4 501.887 190.104 501.887 190.872Z"
				fill="white"
			/>
		</svg>
	);
};

export default Heading;