import { motion, Transition } from 'framer-motion'

const transition: Transition = {
  duration: 5,
  ease: 'easeInOut',
  repeat: Infinity,
  repeatType: 'mirror',
}

export const ShootingStar = () => {
  return (
    <svg
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.6122 29.5454C29.1728 29.9848 29.1728 30.6959 29.6122 31.1342L34.1056 35.6276C34.3247 35.8479 34.6124 35.9568 34.9 35.9568C35.1877 35.9568 35.4753 35.8478 35.6944 35.6276C36.1338 35.1894 36.1338 34.4781 35.6944 34.0388L31.201 29.5454C30.7617 29.1071 30.0516 29.1071 29.6122 29.5454Z"
        fill="#CAD738"
      />

      <path
        d="M29.7774 15.3999C29.9999 15.6639 30.3179 15.801 30.6392 15.801C30.8943 15.801 31.1505 15.7145 31.3606 15.538C31.8359 15.138 31.8977 14.4301 31.4988 13.9549L27.4919 9.18054C27.0931 8.70638 26.384 8.64343 25.9088 9.04228C25.4334 9.44113 25.3717 10.1502 25.7705 10.6254L29.7774 15.3999Z"
        fill="#CAD738"
      />

      <path
        d="M27.0346 28.0914C27.3223 28.0914 27.6099 27.9813 27.829 27.7622C28.2684 27.3228 28.2684 26.6116 27.829 26.1734L23.3367 21.6811C22.8973 21.2429 22.1872 21.2429 21.7479 21.6811C21.3085 22.1205 21.3085 22.8317 21.7479 23.2699L26.2402 27.7622C26.4593 27.9812 26.7469 28.0914 27.0346 28.0914Z"
        fill="#CAD738"
      />

      <path
        d="M19.4882 32.9758C19.023 32.5623 18.3151 32.6027 17.9017 33.068C17.4882 33.5309 17.5297 34.2411 17.9926 34.6545L22.9164 39.0434C23.1299 39.2345 23.3973 39.3277 23.6637 39.3277C23.9727 39.3277 24.2806 39.2018 24.503 38.9524C24.9154 38.4895 24.875 37.7783 24.412 37.3659L19.4882 32.9758Z"
        fill="#CAD738"
      />

      <path
        d="M22.5669 6.88043C22.7895 7.14339 23.1063 7.27823 23.4253 7.27823C23.6816 7.27823 23.9389 7.19053 24.1501 7.01303C24.6243 6.61195 24.6827 5.90287 24.2827 5.4287L20.0276 0.398135C19.6253 -0.0760316 18.9186 -0.134496 18.4432 0.266722C17.9701 0.667809 17.9106 1.3757 18.3106 1.84987L22.5669 6.88043Z"
        fill="#CAD738"
      />

      <path
        d="M37.4136 24.3237C37.6372 24.5855 37.9529 24.7203 38.2709 24.7203C38.5294 24.7203 38.7867 24.6326 38.9979 24.4541C39.471 24.053 39.5294 23.3439 39.1283 22.8698L34.809 17.7786C34.409 17.3077 33.6989 17.2482 33.2247 17.6483C32.7516 18.0505 32.6943 18.7595 33.0955 19.2326L37.4136 24.3237Z"
        fill="#CAD738"
      />

      <path
        d="M53.5636 31.163C53.752 31.4484 54.0642 31.6024 54.3812 31.6024C54.5687 31.6024 54.7571 31.5491 54.9249 31.4364C55.3764 31.1343 55.4981 30.521 55.1969 30.0677L35.5655 0.440756C35.2652 -0.0134856 34.6546 -0.13697 34.204 0.166243C33.7535 0.468415 33.6318 1.08271 33.9321 1.53603L53.5636 31.163Z"
        fill="#CAD738"
      />

      <motion.path
        animate={{ pathLength: [1, 0] }}
        transition={transition}
        strokeLinecap="round"
        d="M60.3412 38.9827L60.3423 38.9826C60.5662 38.9654 60.787 39.0726 60.9354 39.327C61.0847 39.5829 61.0895 39.8761 60.9403 40.1194L60.94 40.12L55.724 48.6364L55.3263 49.2857L55.6157 49.99L59.4921 59.4234C59.4922 59.4237 59.4923 59.4239 59.4925 59.4242C59.4925 59.4243 59.4925 59.4243 59.4925 59.4243C59.6188 59.7331 59.5462 60.0054 59.3924 60.1881C59.2394 60.37 59.0391 60.4354 58.8191 60.3732L58.8188 60.3731L49.3183 57.6893L48.5256 57.4654L47.9112 58.0142L40.5487 64.5911L40.5447 64.5948C40.376 64.7465 40.1704 64.7757 39.9539 64.6794C39.7349 64.582 39.549 64.367 39.5273 64.0332C39.5273 64.033 39.5272 64.0328 39.5272 64.0327L38.876 53.8546L38.8274 53.0948L38.1853 52.6855L29.7638 47.3175L29.7633 47.3172C29.5225 47.1639 29.3983 46.8983 29.4203 46.6028C29.4422 46.3091 29.5937 46.116 29.8024 46.0333L29.8035 46.0328L38.897 42.4213L39.6393 42.1265L39.8091 41.346L41.9612 31.4503C41.9613 31.4502 41.9613 31.4501 41.9613 31.45C41.9613 31.4499 41.9614 31.4498 41.9614 31.4497C42.0271 31.149 42.2118 31.0089 42.4047 30.965C42.6022 30.9202 42.8347 30.9707 43.0219 31.2064C43.0222 31.2067 43.0225 31.2071 43.0228 31.2074L49.2936 39.1563L49.7883 39.7834L50.5848 39.723L60.3412 38.9827Z"
        stroke="#CAD738"
        strokeWidth="3"
      />

      <path
        d="M18.3736 19.8955C18.5927 20.1158 18.8804 20.2246 19.168 20.2246C19.4557 20.2246 19.7433 20.1156 19.9624 19.8955C20.4018 19.4572 20.4018 18.7459 19.9624 18.3066L15.4689 13.8132C15.0307 13.375 14.3194 13.375 13.8801 13.8132C13.4407 14.2525 13.4407 14.9638 13.8801 15.402L18.3736 19.8955Z"
        fill="#CAD738"
      />

      <path
        d="M0.463878 19.9596L5.43256 24.1732C5.64377 24.3519 5.90225 24.4395 6.15849 24.4395C6.47754 24.4395 6.79449 24.3046 7.01689 24.0429C7.41797 23.5697 7.35964 22.8608 6.88653 22.4597L1.91785 18.2461C1.44368 17.845 0.734605 17.9023 0.333519 18.3752C-0.0675676 18.8494 -0.00923498 19.5584 0.463878 19.9596Z"
        fill="#CAD738"
      />

      <path
        d="M33.3269 57.5307L1.86505 33.9353C1.36731 33.5611 0.663894 33.6645 0.291908 34.1589C-0.0800781 34.6556 0.0199961 35.3601 0.51668 35.732L31.9785 59.3285C32.1808 59.4802 32.4179 59.5532 32.6515 59.5532C32.9931 59.5532 33.3314 59.3981 33.5515 59.1038C33.9235 58.6082 33.8236 57.9037 33.3269 57.5307Z"
        fill="#CAD738"
      />

      <path
        d="M3.76961 5.29163C3.98872 5.5118 4.27643 5.62083 4.56401 5.62083C4.85173 5.62083 5.13931 5.5118 5.35842 5.29163C5.79782 4.85342 5.79782 4.1421 5.35842 3.70283L1.98526 0.329671C1.54704 -0.108548 0.835728 -0.108548 0.396456 0.329671C-0.0428168 0.769076 -0.0428168 1.48026 0.396456 1.91848L3.76961 5.29163Z"
        fill="#CAD738"
      />

      <path
        d="M10.7486 25.6193C10.2744 25.2182 9.56536 25.2765 9.16546 25.7497C8.76437 26.2228 8.8227 26.9317 9.29582 27.334L14.0354 31.3543C14.2466 31.533 14.5051 31.6206 14.7624 31.6206C15.0804 31.6206 15.3972 31.4857 15.6197 31.224C16.0208 30.7509 15.9625 30.0419 15.4894 29.6396L10.7486 25.6193Z"
        fill="#CAD738"
      />

      <path
        d="M10.507 12.029C10.7261 12.2493 11.0138 12.3582 11.3014 12.3582C11.5891 12.3582 11.8767 12.2491 12.0958 12.029C12.535 11.5908 12.535 10.8794 12.0958 10.4402L8.72709 7.07149C8.28887 6.63327 7.57756 6.63327 7.13828 7.07149C6.69888 7.5109 6.69888 8.22208 7.13828 8.6603L10.507 12.029Z"
        fill="#CAD738"
      />
    </svg>
  )
}
