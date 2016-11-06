using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TbCms.Models;
using TbCms.Models.Repository;

namespace TbCms.Controllers.Internal.Master
{
    public class SystemUserController : Controller
    {
        /// <summary>
        /// リポジトリクラス.
        /// </summary>
        private ISystemUserRepository _rep;

        /// <summary>
        /// コンストラクタ.
        /// </summary>
        public SystemUserController() : this(new SystemUserRepository()) { }

        /// <summary>
        /// 第2コンストラクタ.
        /// </summary>
        /// <param name="rep"></param>
        public SystemUserController(ISystemUserRepository rep)
        {
            // リポジトリクラスを紐づける.
            _rep = rep;
        }

        /// <summary>
        /// 一覧表示(初回).
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult List()
        {

            var db = new TbCmsContext();
            
            return View(_rep.GetFirstListData());
        }

        /// <summary>
        /// 一覧表示(検索).
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult List(SystemUserListViewModel model)
        {

            var db = new TbCmsContext();

            return View(_rep.GetSarchListData(model));
        }

        /// <summary>
        /// 新規登録(初回).
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult New(int id)
        {
            var db = new TbCmsContext();

            return View("Input", _rep.GetInputNewData());
        }

        /// <summary>
        /// 新規登録(登録).
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult New(SystemUserInputViewModel model)
        {

            if (!ModelState.IsValid)
            {
                return View("Input", model);
            }

            // 登録.
            var ret = _rep.RegistrationInputNewData(model);

            if (!ret)
            {
                // DB登録失敗.
                // TODO：本来はこれだけじゃダメだけど、ひとまず元の画面に戻す.
                return View("Input", model);
            }

            // DB登録に成功したのでリスト画面に戻す.
            // TODO:検索条件を保持しておいた方がよい？.
            var db = new TbCmsContext();
            return View("List", _rep.GetFirstListData());
            
        }

        /// <summary>
        /// 編集(初回).
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Edit(string id)
        {
            var db = new TbCmsContext();

            return View("Input", _rep.GetInputEditData(id));
        }

        /// <summary>
        /// 編集(登録).
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult Edit(SystemUserInputViewModel model)
        {

            if (!ModelState.IsValid)
            {
                return View("Input", model);
            }

            // 登録.
            var ret = _rep.RegistrationInputEditData(model);

            if (!ret)
            {
                // DB登録失敗.
                // TODO：本来はこれだけじゃダメだけど、ひとまず元の画面に戻す.
                return View("Input", model);
            }

            // DB登録に成功したのでリスト画面に戻す.
            // TODO:検索条件を保持しておいた方がよい？.
            var db = new TbCmsContext();
            return View("List", _rep.GetFirstListData());

        }

        /// <summary>
        /// システムユーザIDの検証.
        /// </summary>
        /// <param name="system_user_id"></param>
        /// <returns></returns>
        public ActionResult CheckSystemUserId(String system_user_id)
        {
            return Json(this._rep.IsSystemUserIdAvailable(system_user_id), JsonRequestBehavior.AllowGet);
        }
    }
}