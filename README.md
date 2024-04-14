# Quiz guide

## 測驗說明

> 可用 CSS 或 Tailwind CSS 來實作

### 測驗一： **/profile/!1NMGhCcD3!** user profile 頁面

1. 請從 `component/page/profile/profilePage.tsx` 開始開發
2. 參考以下 API 資訊和 Resource 資訊，呼叫 API 取得資料
3. 可以使用 `/util/numberFormat` 來轉換數值成特定的字串 (ex: 1000 => 1k)
4. 實作下面的照片列表無限滾動的功能,
   - 參考[效果](https://scrollmagic.io/examples/advanced/infinite_scrolling.html)
   - 需要利用 token 去拿下一筆資料
   - 參考資料 [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## 環境設定

1. Node version: 18以上
2. `npm install`
3. `npm run dev` 來啟動開發環境

## 設計稿連結

- [連結](https://www.figma.com/file/w3KSZn5saeoNVoGbiraRe1/playsee-web-test?type=design&mode=design&t=bthtGDVtGADMiarn-0)

## 元件說明

> 已寫好元件可以直接使用

- block/spinner: 用於無限滾動時顯示 loading 狀態
- block/headshot: 用於 profile 頁面顯示使用者頭像
- block/button: Edit Profile / Share 按鈕

## API

### 1. PROFILE_HOST_API

關於 user 的基本資訊

#### Request info:

`POST http://localhost:3000/api/profile`

**_Body_**
| Name | Required | Type |
| -------------- | :------: | -------- |
| user_id | V | string |

**Example**

```
curl --request POST \
  --url 'http://localhost:3000/api/profile'
```

#### Response info:

以下的資料將會被用到

- **userName:** data.user.name `string` 顯示於 profile 頭像下方的名字 (叩叩羅納納)
- **uid:** data.user.uid `string` 顯示於 profile 頁面最上方的使用者 id (kokoronana)
- **followers:** data.count.follower `number`
- **following:** data.count.following + data.count.following_hashtag + data.count.following_location `number`
- **joined** data.count.joined `number`
- **description:** data.profile.public_info.about `string`

### 2. PROFILE_LIST_HOST_API

影片列表資訊

#### Request info:

`POST http://localhost:3000/api/profile/posts`

**_Body_**
| Name | Required | Type |
| ---------- | :------: | ------ |
| user_id | V | string |
| page_token | X | string |

**Example**

```
curl --request POST \
  --url 'http://localhost:3000/api/profile/posts' \
  --data '{
    "page_token": ""
}'
```

#### Response info:

以下的資料將會被用到

- **pageToken:** data.page_token `string` (您將會使用這個去取得下一筆資料，如果 token 是 **"NO_MORE_DATA"** 的話就代表已經沒有資料了)
- **postList:** data.post_list `array`
- **coverUrl:** data.post_list[index].display_resources.thumbnail_url `string`
- **locationName:** data.post_list[index].geo.poi.name `string`
- **desc** data.post_list[index].desc `string`
- **postId:** data.post_list[index].post_id `string`

## LICENSE

Playsee - All Rights Reserved.